'use client'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const AdminHeader = styled.header`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdminTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const LogoutButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c82333;
  }
`;

const AdminContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DashboardCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #ff5678;
  margin-bottom: 0.5rem;
`;

const CardLabel = styled.div`
  color: #666;
  font-size: 1.1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const CreatePostButton = styled(Link)`
  background: linear-gradient(45deg, #ff5678, #ff8a9e);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 86, 120, 0.3);
  }
`;

const PostsTable = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #e9ecef;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  align-items: center;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  background: ${props => props.variant === 'delete' ? '#dc3545' : '#007bff'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.variant === 'delete' ? '#c82333' : '#0056b3'};
  }
`;

const StatusBadge = styled.span<{ status: 'published' | 'draft' }>`
  background: ${props => props.status === 'published' ? '#28a745' : '#ffc107'};
  color: ${props => props.status === 'published' ? 'white' : '#212529'};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Mock data
const mockPosts = [
  {
    id: 1,
    title: 'Hướng dẫn tạo landing page đẹp với React',
    status: 'published' as const,
    date: '2024-01-15',
    views: 1250
  },
  {
    id: 2,
    title: '10 tips để viết code sạch hơn',
    status: 'published' as const,
    date: '2024-01-10',
    views: 890
  },
  {
    id: 3,
    title: 'Thiết kế UI/UX cho người mới bắt đầu',
    status: 'draft' as const,
    date: '2024-01-08',
    views: 0
  }
];

export default function AdminPage() {
  const router = useRouter();
  const [posts] = useState(mockPosts);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  const handleEditPost = (id: number) => {
    // Navigate to edit page
    router.push(`/admin/edit/${id}`);
  };

  const handleDeletePost = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      // Handle delete logic
      console.log('Delete post:', id);
    }
  };

  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>Admin Dashboard</AdminTitle>
        <LogoutButton onClick={handleLogout}>
          Đăng xuất
        </LogoutButton>
      </AdminHeader>

      <AdminContent>
        <DashboardGrid>
          <DashboardCard>
            <CardNumber>{posts.length}</CardNumber>
            <CardLabel>Tổng bài viết</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>{posts.filter(p => p.status === 'published').length}</CardNumber>
            <CardLabel>Bài viết đã xuất bản</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>{posts.filter(p => p.status === 'draft').length}</CardNumber>
            <CardLabel>Bài viết nháp</CardLabel>
          </DashboardCard>
          <DashboardCard>
            <CardNumber>{posts.reduce((sum, post) => sum + post.views, 0)}</CardNumber>
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
                  {post.status === 'published' ? 'Đã xuất bản' : 'Nháp'}
                </StatusBadge>
              </div>
              <div>{post.date}</div>
              <div>
                <ActionButton onClick={() => handleEditPost(post.id)}>
                  Sửa
                </ActionButton>
                <ActionButton variant="delete" onClick={() => handleDeletePost(post.id)}>
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