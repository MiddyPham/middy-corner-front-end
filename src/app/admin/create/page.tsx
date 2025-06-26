"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import Quill editor dynamically to avoid SSR issues
const QuillEditor = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div>Đang tải editor...</div>,
});

const CreateContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const CreateHeader = styled.header`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const BackButton = styled(Link)`
  background: #6c757d;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a6268;
  }
`;

const CreateContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormContainer = styled.form`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f8f9fa;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff5678;
    box-shadow: 0 0 0 3px rgba(255, 86, 120, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff5678;
    box-shadow: 0 0 0 3px rgba(255, 86, 120, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff5678;
    box-shadow: 0 0 0 3px rgba(255, 86, 120, 0.1);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
`;

const RadioInput = styled.input`
  margin: 0;
`;

const FileUpload = styled.div`
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #ff5678;
    background: #fff5f6;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const UploadText = styled.div`
  color: #666;
  font-size: 1rem;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const PreviewImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TagInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  min-height: 50px;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #ff5678;
    box-shadow: 0 0 0 3px rgba(255, 86, 120, 0.1);
  }
`;

const Tag = styled.span`
  background: #ff5678;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RemoveTag = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  line-height: 1;
`;

const TagInputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 100px;
  font-size: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #f8f9fa;
`;

const SaveButton = styled.button`
  background: linear-gradient(45deg, #ff5678, #ff8a9e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 86, 120, 0.3);
  }
`;

const PreviewButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #218838;
    transform: translateY(-2px);
  }
`;

const DraftButton = styled.button`
  background: #ffc107;
  color: #212529;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0a800;
    transform: translateY(-2px);
  }
`;

const CancelButton = styled(Link)`
  background: #6c757d;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a6268;
    transform: translateY(-2px);
  }
`;

// Quill editor styles
const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "color",
  "background",
  "align",
  "link",
  "image",
];

export default function CreatePost() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    thumbnail: null as File | null,
    category: "",
    status: "draft",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    publishDate: "",
    tags: [] as string[],
  });
  const [tagInput, setTagInput] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    setMounted(true);
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSave = (status: "draft" | "published") => {
    const postData = {
      ...formData,
      status,
      publishDate: status === "published" ? new Date().toISOString() : null,
    };

    console.log("Saving post:", postData);
    // Here you would typically send to API
    alert(
      `Bài viết đã được ${
        status === "draft" ? "lưu nháp" : "xuất bản"
      } thành công!`
    );
    router.push("/admin");
  };

  const handlePreview = () => {
    // Open preview in new tab
    const previewWindow = window.open("", "_blank");
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head>
            <title>Xem trước: ${formData.title}</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
              img { max-width: 100%; height: auto; }
              .preview-header { background: #f8f9fa; padding: 1rem; margin-bottom: 2rem; border-radius: 8px; }
            </style>
          </head>
          <body>
            <div class="preview-header">
              <h1>Xem trước bài viết</h1>
              <p><strong>Tiêu đề:</strong> ${formData.title}</p>
              <p><strong>Mô tả:</strong> ${formData.description}</p>
            </div>
            ${formData.content}
          </body>
        </html>
      `);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <CreateContainer>
        <CreateHeader>
          <HeaderTitle>Tạo bài viết mới</HeaderTitle>
          <BackButton href="/admin">← Quay lại Dashboard</BackButton>
        </CreateHeader>
        <CreateContent>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Đang tải...
          </div>
        </CreateContent>
      </CreateContainer>
    );
  }

  return (
    <CreateContainer>
      <CreateHeader>
        <HeaderTitle>Tạo bài viết mới</HeaderTitle>
        <BackButton href="/admin">← Quay lại Dashboard</BackButton>
      </CreateHeader>

      <CreateContent>
        <FormContainer>
          {/* Basic Information */}
          <FormSection>
            <SectionTitle>Thông tin cơ bản</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="title">Tiêu đề bài viết *</Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Nhập tiêu đề bài viết..."
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="slug">Slug URL</Label>
              <Input
                id="slug"
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                placeholder="slug-tu-dong-sinh-tu-tieu-de"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Mô tả ngắn</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Mô tả ngắn gọn về bài viết (hiển thị trên trang danh sách)..."
              />
            </FormGroup>
          </FormSection>

          {/* Content */}
          <FormSection>
            <SectionTitle>Nội dung chính</SectionTitle>
            <FormGroup>
              <Label>Nội dung bài viết</Label>
              <QuillEditor
                value={formData.content}
                onChange={(content) => handleInputChange("content", content)}
                modules={quillModules}
                formats={quillFormats}
                style={{ height: "400px", marginBottom: "1rem" }}
              />
            </FormGroup>
          </FormSection>

          {/* Media */}
          <FormSection>
            <SectionTitle>Ảnh đại diện</SectionTitle>
            <FormGroup>
              <Label>Upload ảnh đại diện</Label>
              <FileUpload
                onClick={() => document.getElementById("thumbnail")?.click()}
              >
                <FileInput
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <UploadText>
                  {thumbnailPreview
                    ? "Click để thay đổi ảnh"
                    : "Click để chọn ảnh hoặc kéo thả vào đây"}
                </UploadText>
              </FileUpload>
              {thumbnailPreview && (
                <ImagePreview>
                  <PreviewImage src={thumbnailPreview} alt="Preview" />
                </ImagePreview>
              )}
            </FormGroup>
          </FormSection>

          {/* Categories and Tags */}
          <FormSection>
            <SectionTitle>Phân loại</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="category">Chuyên mục</Label>
              <Select
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <option value="">Chọn chuyên mục</option>
                <option value="technology">Công nghệ</option>
                <option value="design">Thiết kế</option>
                <option value="development">Lập trình</option>
                <option value="tutorial">Hướng dẫn</option>
                <option value="news">Tin tức</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Tags</Label>
              <TagInput>
                {formData.tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                    <RemoveTag onClick={() => removeTag(tag)}>×</RemoveTag>
                  </Tag>
                ))}
                <TagInputField
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  placeholder="Nhập tag và nhấn Enter..."
                />
              </TagInput>
            </FormGroup>
          </FormSection>

          {/* Status and Publishing */}
          <FormSection>
            <SectionTitle>Trạng thái và xuất bản</SectionTitle>
            
            <FormGroup>
              <Label>Trạng thái</Label>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="status"
                    value="draft"
                    checked={formData.status === "draft"}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                  />
                  Nháp
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="status"
                    value="published"
                    checked={formData.status === "published"}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                  />
                  Xuất bản
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="status"
                    value="hidden"
                    checked={formData.status === "hidden"}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                  />
                  Ẩn
                </RadioLabel>
              </RadioGroup>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="publishDate">Lên lịch đăng bài (tùy chọn)</Label>
              <Input
                id="publishDate"
                type="datetime-local"
                value={formData.publishDate}
                onChange={(e) =>
                  handleInputChange("publishDate", e.target.value)
                }
              />
            </FormGroup>
          </FormSection>

          {/* SEO Options */}
          <FormSection>
            <SectionTitle>Tùy chọn SEO</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="seoTitle">Title SEO</Label>
              <Input
                id="seoTitle"
                type="text"
                value={formData.seoTitle}
                onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                placeholder="Title cho SEO (để trống sẽ dùng tiêu đề bài viết)"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="seoDescription">Description SEO</Label>
              <Textarea
                id="seoDescription"
                value={formData.seoDescription}
                onChange={(e) =>
                  handleInputChange("seoDescription", e.target.value)
                }
                placeholder="Mô tả cho SEO (để trống sẽ dùng mô tả bài viết)"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="seoKeywords">Meta Keywords</Label>
              <Input
                id="seoKeywords"
                type="text"
                value={formData.seoKeywords}
                onChange={(e) =>
                  handleInputChange("seoKeywords", e.target.value)
                }
                placeholder="Từ khóa SEO, phân cách bằng dấu phẩy"
              />
            </FormGroup>
          </FormSection>

          {/* Action Buttons */}
          <ButtonGroup>
            <SaveButton onClick={() => handleSave("published")}>
              Xuất bản
            </SaveButton>
            <DraftButton onClick={() => handleSave("draft")}>
              Lưu nháp
            </DraftButton>
            <PreviewButton onClick={handlePreview}>Xem trước</PreviewButton>
            <CancelButton href="/admin">Hủy</CancelButton>
          </ButtonGroup>
        </FormContainer>
      </CreateContent>
    </CreateContainer>
  );
}
