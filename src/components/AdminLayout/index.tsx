"use client";
import React from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { AdminLayoutContainer, AdminMainContent } from "./adminLayoutStyle";

interface AdminLayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, user }) => {
  return (
    <AdminLayoutContainer>
      <AdminMainContent>
        {children}
      </AdminMainContent>
      <AdminSidebar user={user} />
    </AdminLayoutContainer>
  );
};

export default AdminLayout;