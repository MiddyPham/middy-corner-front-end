"use client";

import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-3px); }
  60% { transform: translateY(-2px); }
`;

export const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

export const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 2rem 2rem;
  border-top: 4px solid #000000;
  margin-top: auto;
  box-shadow: 0 -8px 0px #333333;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 1px 1px 0px #666666;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialLink = styled.a`
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.5rem;
  border: 2px solid #000000;
  border-radius: 999px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 3px 3px 0px #333333;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    background: #000000;
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;
