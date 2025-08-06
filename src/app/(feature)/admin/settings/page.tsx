"use client";
import React from "react";
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
} from "../adminStyled";
import styled from "styled-components";

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SettingsCard = styled.div`
  background: #ffffff;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 
    6px 6px 0px #333333,
    inset 0 0 0 2px #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      10px 10px 0px #333333,
      inset 0 0 0 2px #ffffff;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0px #333333;
`;

const CardDescription = styled.p`
  color: #666666;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const SettingsButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0px #333333;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export default function SettingsPage() {
  const { handleLogout, getCurrentUser } = useAuth();
  const user = getCurrentUser() as TypeUser | null;

  const settingsItems = [
    {
      title: "Cài đặt chung",
      description: "Cấu hình thông tin cơ bản của website như tên site, logo, mô tả...",
      icon: "⚙️",
      action: () => console.log("General settings")
    },
    {
      title: "Quản lý người dùng",
      description: "Thêm, sửa, xóa người dùng và phân quyền truy cập hệ thống.",
      icon: "👥",
      action: () => console.log("User management")
    },
    {
      title: "Cài đặt bảo mật",
      description: "Cấu hình bảo mật, mật khẩu, xác thực 2FA và các tùy chọn bảo mật khác.",
      icon: "🔒",
      action: () => console.log("Security settings")
    },
    {
      title: "Email & Thông báo",
      description: "Cấu hình email server, template email và các thông báo tự động.",
      icon: "📧",
      action: () => console.log("Email settings")
    },
    {
      title: "SEO & Analytics",
      description: "Cấu hình SEO meta tags, Google Analytics, Search Console...",
      icon: "📈",
      action: () => console.log("SEO settings")
    },
    {
      title: "Backup & Restore",
      description: "Sao lưu và khôi phục dữ liệu, cấu hình backup tự động.",
      icon: "💾",
      action: () => console.log("Backup settings")
    }
  ];

  return (
    <AdminLayout user={user ? { name: user.name, role: user.role, avatar: user.avatar } : undefined}>
      <AdminContainer>
        <AdminHeader>
          <AdminTitle>
            Cài đặt hệ thống
            {user && <span className="text-sm text-gray-500 ml-2">({user.name})</span>}
          </AdminTitle>
          <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
        </AdminHeader>

        <AdminContent>
          <SectionTitle>Cấu hình hệ thống</SectionTitle>
          
          <SettingsGrid>
            {settingsItems.map((item, index) => (
              <SettingsCard key={index}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <SettingsButton onClick={item.action}>
                  Cấu hình
                </SettingsButton>
              </SettingsCard>
            ))}
          </SettingsGrid>
        </AdminContent>
      </AdminContainer>
    </AdminLayout>
  );
}