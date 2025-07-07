import styled, { keyframes } from 'styled-components'

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

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
`;

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const NotFoundContent = styled.div`
  text-align: center;
  color: #000000;
  max-width: 600px;
  z-index: 1;
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  animation: ${bounce} 2s ease-out;
  
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

export const NotFoundTitle = styled.h1`
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #000000;
  text-shadow: 3px 3px 0px #333333;
  animation: ${shake} 0.5s ease-in-out 1s;
`;

export const NotFoundSubtitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #333333;
  text-shadow: 2px 2px 0px #666666;
`;

export const NotFoundDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #333333;
  line-height: 1.6;
  font-weight: 600;
`;

export const NotFoundButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 4px solid #000000;
  padding: 1rem 2rem;
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
    animation: ${bounce} 0.5s ease;
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

export const NotFoundIcon = styled.div`
  font-size: clamp(3rem, 10vw, 6rem);
  margin-bottom: 1rem;
  animation: ${wiggle} 3s ease-in-out infinite;
  
  &::before {
    content: '😵';
  }
`;
