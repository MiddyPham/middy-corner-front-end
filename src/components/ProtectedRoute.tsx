"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import LocalStorageUtil, { LOCAL_KEY } from '@/utils/LocalStorageUtil';
import { useAuth } from "@/hooks/useAuth";
import { ERole } from "@/constant/enums";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, #f0f0f0 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, #e8e8e8 0%, transparent 50%);
  }
`;

const LoadingCard = styled.div`
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 400px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid #000000;
    border-radius: 15px;
    pointer-events: none;
  }
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid #000000;
  border-radius: 50%;
  border-top: 4px solid #333333;
  animation: ${wiggle} 1s linear infinite;
  margin: 0 auto 1.5rem;
  box-shadow: 4px 4px 0px #333333;
`;

const LoadingText = styled.p`
  color: #000000;
  font-size: 1.2rem;
  font-weight: 800;
  text-shadow: 1px 1px 0px #333333;
  margin: 0;
`;

const LoadingSubtext = styled.p`
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div<{ delay: number }>`
  width: 8px;
  height: 8px;
  background: #000000;
  border: 2px solid #000000;
  border-radius: 50%;
  animation: ${bounce} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 2px 2px 0px #333333;
`;

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
      <LoadingContainer>
        <LoadingCard>
          <LoadingSpinner />
          <LoadingText>Từ từ, đang kiểm tra ngươi là ai??? </LoadingText>
          <LoadingSubtext>Chờ đi, tí thôi...</LoadingSubtext>
          <LoadingDots>
            <Dot delay={0} />
            <Dot delay={0.2} />
            <Dot delay={0.4} />
          </LoadingDots>
        </LoadingCard>
      </LoadingContainer>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
} 