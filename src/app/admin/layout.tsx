import ProtectedRoute from '@/components/ProtectedRoute';
import { ERole } from "@/constant/enums";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute requiredRole={ERole.ADMIN}>
      {children}
    </ProtectedRoute>
  );
} 