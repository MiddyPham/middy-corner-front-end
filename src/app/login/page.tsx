'use client'
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const FloatingElement = styled.div<{ delay: number; duration: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(45deg, #ff5678, #ff8a9e, #667eea, #764ba2);
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const LoginTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #333, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const LoginSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

const Input = styled.input`
  padding: 1.2rem 1.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 15px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: #ff5678;
    box-shadow: 0 0 0 4px rgba(255, 86, 120, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #999;
  }
  
  &:hover {
    border-color: #ff8a9e;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff5678, #ff8a9e);
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(255, 86, 120, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const BackLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    color: #ff5678;
    transform: translateX(-5px);
  }
`;

const ErrorMessage = styled.div`
  background: linear-gradient(45deg, #fee, #fcc);
  color: #c33;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 0.95rem;
  border: 1px solid #fcc;
  box-shadow: 0 4px 15px rgba(204, 51, 51, 0.1);
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DemoCredentials = styled.div`
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid #dee2e6;
  position: relative;
  z-index: 2;
`;

const DemoTitle = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const DemoText = styled.div`
  color: #666;
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
`;

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Success - redirect to admin dashboard
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/admin');
      } else {
        setError('Tên đăng nhập hoặc mật khẩu không đúng');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <LoginContainer>
      <FloatingElements>
        <FloatingElement delay={0} duration={6} size={20} style={{ top: '20%', left: '10%' }} />
        <FloatingElement delay={2} duration={8} size={15} style={{ top: '60%', right: '15%' }} />
        <FloatingElement delay={4} duration={7} size={25} style={{ top: '80%', left: '20%' }} />
        <FloatingElement delay={1} duration={9} size={18} style={{ top: '30%', right: '30%' }} />
      </FloatingElements>
      
      <LoginCard>
        <LoginHeader>
          <LoginTitle>Ảo giác thật???</LoginTitle>
          <LoginSubtitle>Đề nghị đi chỗ khác chơi</LoginSubtitle>
        </LoginHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Tên đăng nhập</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </SubmitButton>
        </Form>

        <BackLink href="/">
          ← Quay lại trang chủ
        </BackLink>
      </LoginCard>
    </LoginContainer>
  );
} 