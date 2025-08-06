import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  SidebarContainer,
  SidebarToggle,
  SidebarContent,
  SidebarHeader,
  SidebarTitle,
  SidebarNav,
  SidebarSection,
  SectionTitle,
  NavItem,
  NavIcon,
  NavText,
  NavBadge,
  SidebarFooter,
  UserInfo,
  UserAvatar,
  UserDetails,
  UserName,
  UserRole,
} from "./adminSidebarStyle";

interface SidebarProps {
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

const AdminSidebar: React.FC<SidebarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    {
      section: "Dashboard",
      items: [
        {
          id: "overview",
          label: "Tổng quan",
          icon: "📊",
          path: "/admin",
          badge: null,
        },
      ]
    },
    {
      section: "Quản lý nội dung",
      items: [
        {
          id: "posts",
          label: "Bài viết",
          icon: "📝",
          path: "/admin/posts",
          badge: "12", // Có thể dynamic từ API
        },
        {
          id: "categories",
          label: "Categories",
          icon: "📁",
          path: "/admin/categories",
          badge: null,
        },
        {
          id: "tags",
          label: "Tags",
          icon: "🏷️",
          path: "/admin/tags",
          badge: null,
        },
        {
          id: "media",
          label: "Media",
          icon: "🖼️",
          path: "/admin/media",
          badge: null,
        },
      ]
    },
    {
      section: "Người dùng",
      items: [
        {
          id: "users",
          label: "Quản lý Users",
          icon: "👥",
          path: "/admin/users",
          badge: null,
        },
        {
          id: "comments",
          label: "Comments",
          icon: "💬",
          path: "/admin/comments",
          badge: "3",
        },
      ]
    },
    {
      section: "Cài đặt",
      items: [
        {
          id: "settings",
          label: "Cài đặt chung",
          icon: "⚙️",
          path: "/admin/settings",
          badge: null,
        },
        {
          id: "themes",
          label: "Giao diện",
          icon: "🎨",
          path: "/admin/themes",
          badge: null,
        },
        {
          id: "analytics",
          label: "Thống kê",
          icon: "📈",
          path: "/admin/analytics",
          badge: null,
        },
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActiveRoute = (path: string) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(path);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarToggle onClick={toggleSidebar} isOpen={isOpen}>
        {isOpen ? "◀" : "▶"}
      </SidebarToggle>
      
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent>
          <SidebarHeader>
            <SidebarTitle>Admin Panel</SidebarTitle>
          </SidebarHeader>

          <SidebarNav>
            {navigationItems.map((section) => (
              <SidebarSection key={section.section}>
                <SectionTitle>{section.section}</SectionTitle>
                {section.items.map((item) => (
                  <NavItem
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    isActive={isActiveRoute(item.path)}
                  >
                    <NavIcon>{item.icon}</NavIcon>
                    <NavText>{item.label}</NavText>
                    {item.badge && <NavBadge>{item.badge}</NavBadge>}
                  </NavItem>
                ))}
              </SidebarSection>
            ))}
          </SidebarNav>

          {user && (
            <SidebarFooter>
              <UserInfo>
                                 <UserAvatar>
                   {user.avatar ? (
                     <Image 
                       src={user.avatar} 
                       alt={user.name}
                       width={40}
                       height={40}
                       style={{ objectFit: 'cover' }}
                     />
                   ) : (
                     <div>{user.name.charAt(0).toUpperCase()}</div>
                   )}
                 </UserAvatar>
                <UserDetails>
                  <UserName>{user.name}</UserName>
                  <UserRole>{user.role}</UserRole>
                </UserDetails>
              </UserInfo>
            </SidebarFooter>
          )}
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;