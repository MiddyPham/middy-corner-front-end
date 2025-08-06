import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

export const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

export const LoadingContainer = styled.div`
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

export const LoadingCard = styled.div`
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

export const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid #000000;
  border-radius: 50%;
  border-top: 4px solid #333333;
  animation: ${wiggle} 1s linear infinite;
  margin: 0 auto 1.5rem;
  box-shadow: 4px 4px 0px #333333;
`;

export const LoadingText = styled.p`
  color: #000000;
  font-size: 1.2rem;
  font-weight: 800;
  text-shadow: 1px 1px 0px #333333;
  margin: 0;
`;

export const LoadingSubtext = styled.p`
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Dot = styled.div<{ delay: number }>`
  width: 8px;
  height: 8px;
  background: #000000;
  border: 2px solid #000000;
  border-radius: 50%;
  animation: ${bounce} 1.5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  box-shadow: 2px 2px 0px #333333;
`;
