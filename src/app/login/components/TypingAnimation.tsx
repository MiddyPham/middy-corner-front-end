'use client'
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 20px rgba(255, 86, 120, 0.5); }
  50% { text-shadow: 0 0 30px rgba(255, 86, 120, 0.8), 0 0 40px rgba(255, 86, 120, 0.6); }
`;

const TypingContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TypingText = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ff5678, #ff8a9e, #667eea, #764ba2);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${glow} 2s ease-in-out infinite;
  transform: translateZ(20px);
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 2.5rem;
  background: #ff5678;
  margin-left: 2px;
  animation: ${blink} 1s infinite;
  box-shadow: 0 0 10px #ff5678;
`;

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

export default function TypingAnimation({ text, speed = 100 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <TypingContainer>
      <TypingText>{displayText}</TypingText>
      {currentIndex < text.length && <Cursor />}
    </TypingContainer>
  );
} 