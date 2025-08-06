"use client";
import dynamic from 'next/dynamic';
import LoadingCustom from './LoadingCustom';

// Import ProtectedRoute dynamically with SSR disabled
const ProtectedRoute = dynamic(() => import('./ProtectedRoute'), {
  ssr: false,
  loading: () => <LoadingCustom />
});

interface ClientOnlyProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export default function ClientOnlyProtectedRoute({ 
  children, 
  requiredRole 
}: ClientOnlyProtectedRouteProps) {
  return (
    <ProtectedRoute requiredRole={requiredRole}>
      {children}
    </ProtectedRoute>
  );
}