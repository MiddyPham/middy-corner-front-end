'use client'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #ecf0f1;
  }
  
  p {
    line-height: 1.6;
    color: #bdc3c7;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff5678;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  
  &::placeholder {
    color: #bdc3c7;
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #ff5678, #ff8a9e);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 86, 120, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
  font-size: 0.9rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  span {
    background: linear-gradient(45deg, #ff5678, #ff8a9e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Cảm ơn bạn đã đăng ký newsletter!');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            Blog<span>Corner</span>
          </Logo>
          <p>
            Nơi chia sẻ kiến thức, kết nối cộng đồng và khám phá những điều thú vị 
            trong thế giới công nghệ và cuộc sống.
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              📘
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              🐦
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              📷
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              💼
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Liên kết nhanh</h3>
          <FooterLinks>
            <FooterLink href="#home">Trang chủ</FooterLink>
            <FooterLink href="#blog">Bài viết</FooterLink>
            <FooterLink href="#about">Về chúng tôi</FooterLink>
            <FooterLink href="#contact">Liên hệ</FooterLink>
            <FooterLink href="#privacy">Chính sách bảo mật</FooterLink>
            <FooterLink href="#terms">Điều khoản sử dụng</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Danh mục</h3>
          <FooterLinks>
            <FooterLink href="#tech">Công nghệ</FooterLink>
            <FooterLink href="#design">Thiết kế</FooterLink>
            <FooterLink href="#lifestyle">Lối sống</FooterLink>
            <FooterLink href="#tutorials">Hướng dẫn</FooterLink>
            <FooterLink href="#reviews">Đánh giá</FooterLink>
            <FooterLink href="#news">Tin tức</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Đăng ký newsletter</h3>
          <p>
            Nhận những bài viết mới nhất và cập nhật từ chúng tôi qua email.
          </p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Nhập email của bạn"
              required
            />
            <NewsletterButton type="submit">
              Đăng ký
            </NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>
          © 2024 BlogCorner. Tất cả quyền được bảo lưu. 
          Được tạo với ❤️ bởi đội ngũ BlogCorner.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
} 