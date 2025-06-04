import styled from 'styled-components';
import Link from 'next/link';

export const CardContainer = styled.article`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
`;

export const CardContent = styled.div`
  padding: 24px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const CardExcerpt = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const CardDate = styled.span`
  color: #888;
  font-size: 0.875rem;
`;

export const CardReadMore = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
  font-size: 0.875rem;
  
  &:hover {
    text-decoration: underline;
  }
`; 