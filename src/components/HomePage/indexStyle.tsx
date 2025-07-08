'use client'

import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
`;

export const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

export const LandingContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
  
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

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #000000;
  max-width: 800px;
  z-index: 1;
  animation: ${slideIn} 1s ease-out;
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  
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

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #000000;
  line-height: 1.2;
  text-shadow: 2px 2px 0px #333333;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: 2.5rem;
  color: #333333;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
`;

export const CTAButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 4px solid #000000;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 0px #333333;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 0px #333333;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 0px #333333;
  }
  
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
  
  &:hover::before {
    left: 100%;
  }
`;

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const FloatingElement = styled.div<{
  delay: number;
  duration: number;
  size: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: #333333;
  border: 3px solid #000000;
  border-radius: 50%;
  animation: ${bounce} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

export const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
  position: relative;
  border-top: 5px solid #000000;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  color: #000000;
  font-weight: 800;
  text-shadow: 2px 2px 0px #333333;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 4px solid #000000;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      12px 12px 0px #333333,
      inset 0 0 0 2px #ffffff;
  }
  
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

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #000000;
  border: 4px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #ffffff;
  box-shadow: 4px 4px 0px #333333;
  animation: ${wiggle} 3s ease-in-out infinite;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000000;
  font-weight: 800;
  text-shadow: 1px 1px 0px #333333;
`;

export const FeatureDescription = styled.p`
  color: #333333;
  line-height: 1.6;
  font-weight: 600;
`;

export const BlogPreviewSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f8f8;
  border-top: 5px solid #000000;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BlogCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid #000000;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      12px 12px 0px #333333,
      inset 0 0 0 2px #ffffff;
  }
`;

export const BlogImage = styled.div`
  height: 200px;
  background: #333333;
  border-bottom: 4px solid #000000;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, #ffffff 3px, transparent 3px),
      radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px);
    background-size: 50px 50px, 60px 60px, 40px 40px;
    opacity: 0.3;
  }
`;

export const BlogContent = styled.div`
  padding: 1.5rem;
`;

export const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #000000;
  font-weight: 800;
  text-shadow: 1px 1px 0px #333333;
`;

export const BlogExcerpt = styled.p`
  color: #333333;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #666666;
  font-weight: 600;
  border-top: 2px solid #000000;
  padding-top: 0.5rem;
`;

export const CTASection = styled.section`
  padding: 5rem 2rem;
  background: #000000;
  text-align: center;
  color: #ffffff;
  border-top: 5px solid #333333;
`;

export const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  
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

export const CTATitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #000000;
  text-shadow: 2px 2px 0px #333333;
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #333333;
  line-height: 1.6;
  font-weight: 600;
`;

export const SecondaryButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: 4px solid #000000;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1rem;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

// export const MainLayout = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// export const MainContent = styled.main`
//   flex: 1;
// `;
