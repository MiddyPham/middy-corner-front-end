"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { CreateContainer, CreateHeader, HeaderTitle, BackButton, CreateContent, FormContainer, FormSection, SectionTitle, FormGroup, Label, Input, Textarea, Select, RadioGroup, RadioLabel, RadioInput, FileUpload, FileInput, UploadText, ImagePreview, PreviewImage, TagInput, Tag, RemoveTag, TagInputField, ButtonGroup, SaveButton, DraftButton, PreviewButton, CancelButton, ErrorMessage } from "./createStyle";
import 'react-quill-new/dist/quill.snow.css';

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
  "color",
  "background",
  "align",
  "link",
  "image",
];

interface FormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: File | null;
  category: string;
  status: "draft" | "published" | "hidden";
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  publishDate: string;
  tags: string[];
}

export default function CreatePost() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      content: "",
      thumbnail: null,
      category: "",
      status: "draft",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      publishDate: "",
      tags: [],
    }
  });

  const watchedTitle = watch("title");
  const watchedTags = watch("tags");

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
    if (watchedTitle) {
      const slug = watchedTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setValue("slug", slug);
    }
  }, [watchedTitle, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("thumbnail", file);
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
      if (!watchedTags.includes(tagInput.trim())) {
        setValue("tags", [...watchedTags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue("tags", watchedTags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = (data: FormData) => {
    const postData = {
      ...data,
      publishDate: data.status === "published" ? new Date().toISOString() : null,
    };

    console.log("Saving post:", postData);
    // Here you would typically send to API
    // alert(
    //   `Bài viết đã được ${
    //     data.status === "draft" ? "lưu nháp" : "xuất bản"
    //   } thành công!`
    // );
    // router.push("/admin");
  };

  const handlePreview = () => {
    const formData = watch();
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
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {/* Basic Information */}
          <FormSection>
            <SectionTitle>Thông tin cơ bản</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="title">Tiêu đề bài viết *</Label>
              <Input
                id="title"
                type="text"
                {...register("title", { 
                  required: "Tiêu đề là bắt buộc",
                  minLength: { value: 5, message: "Tiêu đề phải có ít nhất 5 ký tự" }
                })}
                placeholder="Nhập tiêu đề bài viết..."
                className={errors.title ? "error" : ""}
              />
              {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="slug">Slug URL</Label>
              <Input
                id="slug"
                type="text"
                {...register("slug", { 
                  required: "Slug là bắt buộc",
                  pattern: { value: /^[a-z0-9-]+$/, message: "Slug chỉ được chứa chữ thường, số và dấu gạch ngang" }
                })}
                placeholder="slug-tu-dong-sinh-tu-tieu-de"
                className={errors.slug ? "error" : ""}
              />
              {errors.slug && <ErrorMessage>{errors.slug.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Mô tả ngắn</Label>
              <Textarea
                id="description"
                {...register("description", { 
                  maxLength: { value: 200, message: "Mô tả không được quá 200 ký tự" }
                })}
                placeholder="Mô tả ngắn gọn về bài viết (hiển thị trên trang danh sách)..."
                className={errors.description ? "error" : ""}
              />
              {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </FormGroup>
          </FormSection>

          {/* Content */}
          <FormSection>
            <SectionTitle>Nội dung chính</SectionTitle>
            <FormGroup>
              <Label>Nội dung bài viết</Label>
              <Controller
                name="content"
                control={control}
                rules={{ required: "Nội dung là bắt buộc" }}
                render={({ field }) => (
                  <QuillEditor
                    value={field.value}
                    onChange={field.onChange}
                    modules={quillModules}
                    formats={quillFormats}
                    style={{ height: "400px", marginBottom: "1rem" }}
                  />
                )}
              />
              {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}
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
                {...register("category", { required: "Vui lòng chọn chuyên mục" })}
                className={errors.category ? "error" : ""}
              >
                <option value="">Chọn chuyên mục</option>
                <option value="technology">Công nghệ</option>
                <option value="design">Thiết kế</option>
                <option value="development">Lập trình</option>
                <option value="tutorial">Hướng dẫn</option>
                <option value="news">Tin tức</option>
              </Select>
              {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Tags</Label>
              <TagInput>
                {watchedTags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                    <RemoveTag type="button" onClick={() => removeTag(tag)}>×</RemoveTag>
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
                    value="draft"
                    {...register("status")}
                  />
                  Nháp
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    value="published"
                    {...register("status")}
                  />
                  Xuất bản
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    value="hidden"
                    {...register("status")}
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
                {...register("publishDate")}
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
                {...register("seoTitle")}
                placeholder="Title cho SEO (để trống sẽ dùng tiêu đề bài viết)"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="seoDescription">Description SEO</Label>
              <Textarea
                id="seoDescription"
                {...register("seoDescription", { 
                  maxLength: { value: 160, message: "Mô tả SEO không được quá 160 ký tự" }
                })}
                placeholder="Mô tả cho SEO (để trống sẽ dùng mô tả bài viết)"
                className={errors.seoDescription ? "error" : ""}
              />
              {errors.seoDescription && <ErrorMessage>{errors.seoDescription.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="seoKeywords">Meta Keywords</Label>
              <Input
                id="seoKeywords"
                type="text"
                {...register("seoKeywords")}
                placeholder="Từ khóa SEO, phân cách bằng dấu phẩy"
              />
            </FormGroup>
          </FormSection>

          {/* Action Buttons */}
          <ButtonGroup>
            <SaveButton 
              type="submit" 
              disabled={isSubmitting}
              onClick={() => setValue("status", "published")}
            >
              {isSubmitting ? "Đang lưu..." : "Xuất bản"}
            </SaveButton>
            <DraftButton 
              type="submit" 
              disabled={isSubmitting}
              onClick={() => setValue("status", "draft")}
            >
              {isSubmitting ? "Đang lưu..." : "Lưu nháp"}
            </DraftButton>
            <PreviewButton type="button" onClick={handlePreview}>Xem trước</PreviewButton>
            <CancelButton href="/admin">Hủy</CancelButton>
          </ButtonGroup>
        </FormContainer>
      </CreateContent>
    </CreateContainer>
  );
}
