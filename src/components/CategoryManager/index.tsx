"use client";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriesService } from "@/app/api/categories";
import { TypeCategory } from "@/constant/types";
import {
  CategoryManagerContainer,
  SectionTitle,
  CategoryGrid,
  CategoryCard,
  CategoryName,
  CategoryCount,
  CategoryActions,
  ActionButton,
  AddCategoryButton,
  Modal,
  ModalContent,
  ModalTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  SaveButton,
  CancelButton,
  ErrorMessage,
} from "./categoryManagerStyle";

interface Category extends TypeCategory {
  postCount?: number;
}

interface CategoryManagerProps {
  onCategoryChange?: () => void;
}

const CategoryManager: React.FC<CategoryManagerProps> = ({ onCategoryChange }) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Query to fetch categories
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await categoriesService.getCategories();
      if (response.success) {
        // Add postCount to each category
        return response.data.map((cat: TypeCategory) => ({
          ...cat,
          id: cat.id || "",
          postCount: 0, // TODO: Get actual post count from posts API
        }));
      } else {
        throw new Error(response.message || 'Failed to fetch categories');
      }
    },
  });

  // Mutation for creating category
  const createCategoryMutation = useMutation({
    mutationFn: (newCategory: TypeCategory) => categoriesService.createCategory(newCategory),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      handleCloseModal();
      onCategoryChange?.();
    },
    onError: (error) => {
      console.error('Failed to create category:', error);
      alert('Có lỗi xảy ra khi tạo category');
    },
  });

  // Mutation for updating category
  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TypeCategory }) => 
      categoriesService.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      handleCloseModal();
      onCategoryChange?.();
    },
    onError: (error) => {
      console.error('Failed to update category:', error);
      alert('Có lỗi xảy ra khi cập nhật category');
    },
  });

  // Mutation for deleting category
  const deleteCategoryMutation = useMutation({
    mutationFn: (id: string) => categoriesService.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      onCategoryChange?.();
    },
    onError: (error) => {
      console.error('Failed to delete category:', error);
      alert('Có lỗi xảy ra khi xóa category');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Tên category là bắt buộc";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Mô tả là bắt buộc";
    }
    
    // Check if name already exists (exclude current editing category)
    const existingCategory = categories.find(cat => 
      cat.name.toLowerCase() === formData.name.toLowerCase().trim() && 
      cat.id !== editingCategory?.id
    );
    if (existingCategory) {
      newErrors.name = "Tên category này đã tồn tại";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (editingCategory) {
      // Update existing category
      const updateData: TypeCategory = {
        id: editingCategory.id,
        name: formData.name.trim(),
        description: formData.description.trim(),
        status: formData.status,
      };
      
      updateCategoryMutation.mutate({
        id: editingCategory.id!,
        data: updateData,
      });
    } else {
      // Create new category
      const newCategoryData: TypeCategory = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        status: formData.status,
      };
      
      createCategoryMutation.mutate(newCategoryData);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      status: category.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (category: Category) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa category "${category.name}"?`)) {
      return;
    }
    
    deleteCategoryMutation.mutate(category.id!);
  };

  const handleOpenModal = () => {
    setEditingCategory(null);
    setFormData({ name: "", description: "", status: "active" });
    setErrors({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({ name: "", description: "", status: "active" });
    setErrors({});
  };

  return (
    <CategoryManagerContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <SectionTitle>Quản lý Category</SectionTitle>
        <AddCategoryButton onClick={handleOpenModal}>
          + Thêm Category
        </AddCategoryButton>
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Đang tải categories...</p>
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#ff0000' }}>
          <p>Không còn cái categories nào đâu</p>
        </div>
      ) : (
        <CategoryGrid>
          {categories.map((category) => (
            <CategoryCard key={category.id}>
              <CategoryName>{category.name}</CategoryName>
              <CategoryCount>{category.postCount || 0} bài viết</CategoryCount>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                {category.description}
              </p>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>
                Trạng thái: <span style={{ 
                  color: category.status === 'active' ? '#28a745' : '#6c757d',
                  fontWeight: 'bold'
                }}>
                  {category.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                </span>
              </div>
              <CategoryActions>
                <ActionButton onClick={() => handleEdit(category)}>
                  Sửa
                </ActionButton>
                <ActionButton 
                  variant="delete" 
                  onClick={() => handleDelete(category)}
                  disabled={deleteCategoryMutation.isPending}
                >
                  {deleteCategoryMutation.isPending ? 'Đang xóa...' : 'Xóa'}
                </ActionButton>
              </CategoryActions>
            </CategoryCard>
          ))}
        </CategoryGrid>
      )}

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalTitle>
              {editingCategory ? "Sửa Category" : "Thêm Category Mới"}
            </ModalTitle>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Tên Category</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nhập tên category"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>Mô tả</Label>
                <Input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Mô tả về category"
                  className={errors.description ? "error" : ""}
                />
                {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>Trạng thái</Label>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                </Select>
              </FormGroup>

              <ButtonGroup>
                <SaveButton 
                  type="submit" 
                  disabled={createCategoryMutation.isPending || updateCategoryMutation.isPending}
                >
                  {createCategoryMutation.isPending || updateCategoryMutation.isPending 
                    ? "Đang lưu..." 
                    : (editingCategory ? "Cập nhật" : "Thêm mới")
                  }
                </SaveButton>
                <CancelButton type="button" onClick={handleCloseModal}>
                  Hủy
                </CancelButton>
              </ButtonGroup>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </CategoryManagerContainer>
  );
};

export default CategoryManager;