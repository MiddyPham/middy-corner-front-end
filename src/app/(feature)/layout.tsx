import ClientOnlyProtectedRoute from "@/components/ClientOnlyProtectedRoute";
import { ERole } from "@/constant/enums";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientOnlyProtectedRoute requiredRole={ERole.ADMIN}>{children}</ClientOnlyProtectedRoute>;
}
