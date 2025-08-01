/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LocalStorageUtil, { LOCAL_KEY } from '@/utils/LocalStorageUtil';
import { useAuth } from "@/hooks/useAuth";
import { ERole } from "@/constant/enums";
import LoadingCustom from "./LoadingCustom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole = ERole.ADMIN 
}: ProtectedRouteProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = isAuthenticated();
        console.log(authenticated);
        
        if (!authenticated) {
          router.push('/login');
          return;
        }

        if (requiredRole) {
          const user = LocalStorageUtil.getItemObject(LOCAL_KEY.USER);
          if (!user || user.role !== requiredRole) {
            router.push('/');
            return;
          }
        }

        setIsAuthorized(true);
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router, requiredRole]);

  if (isLoading) {
    return (
      <LoadingCustom />
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
} 