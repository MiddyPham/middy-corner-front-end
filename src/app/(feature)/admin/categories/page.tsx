"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { TypeUser } from "@/constant/types";
import CategoryManager from "@/components/CategoryManager";
import AdminLayout from "@/components/AdminLayout";
import {
  AdminContainer,
  AdminHeader,
  AdminTitle,
  LogoutButton,
  AdminContent,
} from "../adminStyled";

export default function CategoriesPage() {
  const { handleLogout, getCurrentUser } = useAuth();
  const user = getCurrentUser() as TypeUser | null;

  return (
    <AdminLayout user={user ? { name: user.name, role: user.role, avatar: user.avatar } : undefined}>
      <AdminContainer>
        <AdminHeader>
          <AdminTitle>
            Quản lý Categories
            {user && <span className="text-sm text-gray-500 ml-2">({user.name})</span>}
          </AdminTitle>
          <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
        </AdminHeader>

        <AdminContent>
          <CategoryManager onCategoryChange={() => console.log("Category changed")} />
        </AdminContent>
      </AdminContainer>
    </AdminLayout>
  );
}