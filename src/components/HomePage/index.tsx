import React from "react";
import {
    LandingContainer,
    HeroSection,
    FloatingElements,
    FloatingElement,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    CTAButton,
    FeaturesSection,
    SectionTitle,
    FeaturesGrid,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    BlogPreviewSection,
    BlogGrid,
    BlogCard,
    BlogImage,
    BlogContent,
    BlogTitle,
    BlogExcerpt,
    BlogMeta,
    CTASection,
    CTAContent,
    CTATitle,
    CTADescription,
    SecondaryButton,
  } from "./indexStyle";

const HomePage = () => {
  return (
    <LandingContainer>
      <HeroSection id="home">
        <FloatingElements>
          <FloatingElement
            delay={0}
            duration={6}
            size={20}
            style={{ top: "20%", left: "10%" }}
          />
          <FloatingElement
            delay={2}
            duration={8}
            size={15}
            style={{ top: "60%", right: "15%" }}
          />
          <FloatingElement
            delay={4}
            duration={7}
            size={25}
            style={{ top: "80%", left: "20%" }}
          />
          <FloatingElement
            delay={1}
            duration={9}
            size={18}
            style={{ top: "30%", right: "30%" }}
          />
        </FloatingElements>

        <HeroContent>
          <HeroTitle>Thế giới của những bí ẩn</HeroTitle>
          <HeroSubtitle>
            Hãy để tôi giúp bạn khám phá những bí ẩn của thế giới ảo giác
          </HeroSubtitle>
          <CTAButton>Cùng đi nào!!!</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection id="features">
        <SectionTitle>Tại sao bạn lại lạc vào chốn này?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Những nội dung ảo giác</FeatureTitle>
            <FeatureDescription>
              Những bài viết sẽ đưa bạn đến với những bí ẩn của thế giới ảo giác
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureTitle>Đẹp sao???</FeatureTitle>
            <FeatureDescription>
              Giao diện 2D chứa những màu sắc ảo giác để làm bạn thấy đau mắt 
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🚀</FeatureIcon>
            <FeatureTitle>Nhanh như gió nhưng lại chậm lắm</FeatureTitle>
            <FeatureDescription>
              Tải trang nhanh chóng, tối ưu hóa hiệu suất để mang đến trải
              nghiệm mượt mà nhất, nhưng lại chậm lắm
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BlogPreviewSection id="blog">
        <SectionTitle>Bài viết nổi bật</SectionTitle>
        <BlogGrid>
          <BlogCard>
            <BlogImage />
            <BlogContent>
              <BlogTitle>Hướng dẫn tạo landing page đẹp với React</BlogTitle>
              <BlogExcerpt>
                Khám phá những kỹ thuật và best practices để tạo ra những
                landing page ấn tượng và hiệu quả với React...
              </BlogExcerpt>
              <BlogMeta>
                <span>5 phút đọc</span>
                <span>2 ngày trước</span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>

          <BlogCard>
            <BlogImage />
            <BlogContent>
              <BlogTitle>10 tips để viết code sạch hơn</BlogTitle>
              <BlogExcerpt>
                Những nguyên tắc và thực hành quan trọng giúp bạn viết code dễ
                đọc, dễ bảo trì và hiệu quả hơn...
              </BlogExcerpt>
              <BlogMeta>
                <span>8 phút đọc</span>
                <span>1 tuần trước</span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>

          <BlogCard>
            <BlogImage />
            <BlogContent>
              <BlogTitle>Thiết kế UI/UX cho người mới bắt đầu</BlogTitle>
              <BlogExcerpt>
                Những nguyên lý cơ bản và công cụ cần thiết để bắt đầu hành
                trình thiết kế giao diện người dùng...
              </BlogExcerpt>
              <BlogMeta>
                <span>12 phút đọc</span>
                <span>2 tuần trước</span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        </BlogGrid>
      </BlogPreviewSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Sẵn sàng khám phá?</CTATitle>
          <CTADescription>
            Tham gia cùng chúng tôi để khám phá những bài viết thú vị, học hỏi
            kiến thức mới và kết nối với cộng đồng
          </CTADescription>
          <CTAButton>Đăng ký ngay</CTAButton>
          <SecondaryButton>Xem thêm bài viết</SecondaryButton>
        </CTAContent>
      </CTASection>
    </LandingContainer>
  );
};

export default HomePage;
