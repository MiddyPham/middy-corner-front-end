import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  
  img {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
  
  &:active {
    transform: translateY(1px);
  }
`; 