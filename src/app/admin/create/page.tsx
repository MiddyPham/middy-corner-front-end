"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { CreateContainer, CreateHeader, HeaderTitle, BackButton, CreateContent, FormContainer, FormSection, SectionTitle, FormGroup, Label, Input, Textarea, Select, RadioGroup, RadioLabel, RadioInput, FileUpload, FileInput, UploadText, ImagePreview, PreviewImage, TagInput, Tag, RemoveTag, TagInputField, ButtonGroup, SaveButton, DraftButton, PreviewButton, CancelButton } from "./createStyle";
import 'react-quill-new/dist/quill.snow.css';

// Import Quill editor dynamically to avoid SSR issues
const QuillEditor = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div>Đang tải editor...</div>,
});

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
