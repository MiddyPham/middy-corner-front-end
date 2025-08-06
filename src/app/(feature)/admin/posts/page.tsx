"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { TypeUser } from "@/constant/types";
import AdminLayout from "@/components/AdminLayout";
import {
  AdminContainer,
  AdminHeader,
  AdminTitle,
  LogoutButton,
  AdminContent,
  SectionTitle,
  CreatePostButton,
  PostsTable,
  TableHeader,
  TableRow,
  ActionButton,
  StatusBadge,
} from "../adminStyled";

interface Post {
  id: number;
  title: string;
  status: "published" | "draft";
  date: string;
  views: number;
}

export default function PostsPage() {
  const { handleLogout, getCurrentUser } = useAuth();
  const user = getCurrentUser() as TypeUser | null;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Mock data - thay thế bằng API call thực tế
        const mockPosts: Post[] = [
          {
            id: 1,
            title: "Bài viết đầu tiên",
            status: "published",
            date: "2024-01-15",
            views: 150
          },
          {
            id: 2,
            title: "Hướng dẫn sử dụng React Query",
            status: "draft",
            date: "2024-01-14",
            views: 0
          },
          {
            id: 3,
            title: "Thiết kế UI/UX hiện đại",
            status: "published",
            date: "2024-01-13",
            views: 89
          }
        ];
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleEditPost = (id: number) => {
    console.log("Edit post:", id);
    // router.push(`/admin/edit/${id}`);
  };

  const handleDeletePost = async (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      try {
        // await postsAPI.delete(id.toString());
        setPosts(posts.filter(post => post.id !== id));
        console.log("Deleted post:", id);
      } catch (error) {
        console.error("Delete error:", error);
        alert("Có lỗi xảy ra khi xóa bài viết");
      }
    }
  };

  if (loading) {
    return (
      <AdminLayout user={user ? { name: user.name, role: user.role, avatar: user.avatar } : undefined}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải dữ liệu...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout user={user ? { name: user.name, role: user.role, avatar: user.avatar } : undefined}>
      <AdminContainer>
        <AdminHeader>
          <AdminTitle>
            Quản lý Bài viết
            {user && <span className="text-sm text-gray-500 ml-2">({user.name})</span>}
          </AdminTitle>
          <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
        </AdminHeader>

        <AdminContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <SectionTitle>Danh sách bài viết ({posts.length})</SectionTitle>
            <CreatePostButton href="/admin/create">
              + Tạo bài viết mới
            </CreatePostButton>
          </div>

          <PostsTable>
            <TableHeader>
              <div>ID</div>
              <div>Tiêu đề</div>
              <div>Trạng thái</div>
              <div>Ngày tạo</div>
              <div>Lượt xem</div>
              <div>Thao tác</div>
            </TableHeader>

            {posts.map((post) => (
              <TableRow key={post.id}>
                <div>#{post.id}</div>
                <div>{post.title}</div>
                <div>
                  <StatusBadge status={post.status}>
                    {post.status === "published" ? "Đã xuất bản" : "Nháp"}
                  </StatusBadge>
                </div>
                <div>{post.date}</div>
                <div>{post.views}</div>
                <div>
                  <ActionButton onClick={() => handleEditPost(post.id)}>
                    Sửa
                  </ActionButton>
                  <ActionButton
                    variant="delete"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Xóa
                  </ActionButton>
                </div>
              </TableRow>
            ))}
          </PostsTable>
        </AdminContent>
      </AdminContainer>
    </AdminLayout>
  );
}