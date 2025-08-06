"use client";

import Link from "next/link";
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

export const LoginContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
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
    background: 
      radial-gradient(circle at 20% 80%, #f0f0f0 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, #e8e8e8 0%, transparent 50%);
  }
`;

export const MatrixRain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const MatrixColumn = styled.div<{ delay: number; left: number }>`
  position: absolute;
  top: -100vh;
  left: ${({ left }) => `${left}%`};
  width: 3px;
  height: 100vh;
  background: linear-gradient(180deg, transparent 0%, #333333 50%, transparent 100%);
  animation: ${slideIn} ${({ delay }) => 4 + delay}s linear infinite;   
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0.4;
`;

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const FloatingElement = styled.div<{
  delay: number;
  duration: number;
  size: number;
  depth: number;
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

export const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
`;

export const PatternCircle = styled.div<{ x: number; y: number; size: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid #333333;
  border-radius: 50%;
  animation: ${bounce} ${3 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const PatternSquare = styled.div<{ x: number; y: number; size: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid #333333;
  background: #ffffff;
  animation: ${wiggle} ${4 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const PatternTriangle = styled.div<{ x: number; y: number; size: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: 0;
  height: 0;
  border-left: ${props => props.size / 2}px solid transparent;
  border-right: ${props => props.size / 2}px solid transparent;
  border-bottom: ${props => props.size}px solid #333333;
  animation: ${bounce} ${3.5 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const PatternLine = styled.div<{ x: number; y: number; width: number; height: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: #333333;
  animation: ${wiggle} ${5 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const ScribbleLine = styled.div<{ x: number; y: number; width: number; height: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: #333333;
  border-radius: ${props => props.height}px;
  transform: rotate(${Math.random() * 360}deg);
  animation: ${wiggle} ${4 + Math.random() * 3}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: -${props => props.height}px;
    left: 20%;
    width: 60%;
    height: ${props => props.height}px;
    background: #333333;
    border-radius: ${props => props.height}px;
    transform: rotate(45deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${props => props.height}px;
    right: 20%;
    width: 60%;
    height: ${props => props.height}px;
    background: #333333;
    border-radius: ${props => props.height}px;
    transform: rotate(-45deg);
  }
`;

export const CurvedLine = styled.div<{ x: number; y: number; size: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 3px solid #333333;
  border-radius: 50%;
  border-top: none;
  border-left: none;
  animation: ${bounce} ${3 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: -${props => props.size / 2}px;
    left: -${props => props.size / 2}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 2px solid #333333;
    border-radius: 50%;
    border-bottom: none;
    border-right: none;
  }
`;

export const ZigzagLine = styled.div<{ x: number; y: number; width: number; height: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    #333333 5px,
    #333333 10px
  );
  animation: ${wiggle} ${5 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const DoodleCircle = styled.div<{ x: number; y: number; size: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 3px solid #333333;
  border-radius: 50%;
  animation: ${bounce} ${3 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border: 2px solid #333333;
    border-radius: 50%;
    border-top: none;
    border-left: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 35%;
    left: 35%;
    width: 30%;
    height: 30%;
    background: #333333;
    border-radius: 50%;
  }
`;

export const WavyLine = styled.div<{ x: number; y: number; width: number; height: number; delay: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 8px,
    #333333 8px,
    #333333 12px
  );
  border-radius: ${props => props.height}px;
  animation: ${wiggle} ${4 + Math.random() * 2}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const LoginCard = styled.div`
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  animation: ${slideIn} 0.8s ease-out;
  
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

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 3;
`;

export const LoginSubtitle = styled.p`
  color: #333333;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 3;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-weight: 800;
  color: #000000;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  position: relative;
  
  &::before {
    content: '★';
    position: absolute;
    left: -1.5rem;
    color: #333333;
    animation: ${wiggle} 2s ease-in-out infinite;
  }
`;

export const Input = styled.input`
  padding: 1.2rem 1.5rem;
  border: 4px solid #000000;
  border-radius: 15px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  color: #000000;
  font-weight: 600;
  
  &::placeholder {
    color: #666666;
    font-weight: 500;
  }
  
  &:focus {
    outline: none;
    border-color: #333333;
    box-shadow: 
      0 0 0 3px #ffffff,
      0 0 0 6px #000000;
    transform: translateY(-3px);
  }
  
  &:hover {
    border-color: #333333;
    transform: translateY(-2px);
  }
  
  &.error {
    border-color: #ff0000;
    box-shadow: 
      0 0 0 3px #ffffff,
      0 0 0 6px #ff0000;
    animation: ${shake} 0.5s ease;
  }
`;

export const SubmitButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 4px solid #000000;
  padding: 1.2rem 2rem;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 800;
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
    transform: translateY(-5px);
    box-shadow: 
      0 10px 0px #333333;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 0px #333333;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: #333333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  z-index: 3;
  
  &:hover {
    color: #000000;
    transform: translateX(-5px);
  }
  
  &::before {
    content: '←';
    margin-right: 0.5rem;
    animation: ${wiggle} 2s ease-in-out infinite;
  }
`;

export const ErrorMessage = styled.div`
  background: #ffffff;
  color: #000000;
  padding: 0.2rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  border: 3px solid #000000;
  box-shadow: 
    4px 4px 0px #333333;
  animation: ${shake} 0.5s ease;
  margin-bottom: 1rem;
  
  &:focus {
    outline: 2px solid #333333;
    outline-offset: 2px;
  }
`;

export const ParticleSystem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const Particle = styled.div<{
  size: number;
  x: number;
  y: number;
  delay: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: #333333;
  border: 2px solid #000000;
  border-radius: 50%;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  animation: ${bounce} ${3 + Math.random() * 3}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;
