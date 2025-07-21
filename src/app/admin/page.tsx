"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AdminContainer,
  AdminHeader,
  AdminTitle,
  LogoutButton,
  AdminContent,
  DashboardGrid,
  DashboardCard,
  CardNumber,
  CardLabel,
  SectionTitle,
  CreatePostButton,
  PostsTable,
  TableHeader,
  TableRow,
  ActionButton,
  StatusBadge,
} from "./adminStyled";
import { useAuth } from "@/hooks/useAuth";
import { TypeUser } from "@/constant/types";

interface Post {
  id: number;
  title: string;
  status: "published" | "draft";
  date: string;
  views: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<TypeUser | null>(null);
  const { handleLogout, getCurrentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy thông tin user
        const user = getCurrentUser();
        setUser(user);

        // Lấy danh sách bài viết
        // const response = await postsAPI.getAll();
        // setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditPost = (id: number) => {
    router.push(`/admin/edit/${id}`);
  };

  const handleDeletePost = async (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      try {
        // await postsAPI.delete(id.toString());
        // // Cập nhật lại danh sách
        // const response = await postsAPI.getAll();
        // setPosts(response.data);
      } catch (error) {
        console.error("Delete error:", error);
        alert("Có lỗi xảy ra khi xóa bài viết");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>
          Admin Dashboard
          {user && <span className="text-sm text-gray-500 ml-2">({user.name})</span>}
        </AdminTitle>
        <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
      </AdminHeader>

      <AdminContent>
        <DashboardGrid>
          <DashboardCard>
            <CardNumber>{posts.length}</CardNumber>
            <CardLabel>Tổng bài viết</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>
              {posts.filter((p) => p.status === "published").length}
            </CardNumber>
            <CardLabel>Bài viết đã xuất bản</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>
              {posts.filter((p) => p.status === "draft").length}
            </CardNumber>
            <CardLabel>Bài viết nháp</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>
              {posts.reduce((sum, post) => sum + post.views, 0)}
            </CardNumber>
            <CardLabel>Tổng lượt xem</CardLabel>
          </DashboardCard>
        </DashboardGrid>

        <SectionTitle>Quản lý bài viết</SectionTitle>
        <CreatePostButton href="/admin/create">
          + Tạo bài viết mới
        </CreatePostButton>

        <PostsTable>
          <TableHeader>
            <div>ID</div>
            <div>Tiêu đề</div>
            <div>Trạng thái</div>
            <div>Ngày tạo</div>
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
  );
}
