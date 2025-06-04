import styled from 'styled-components';

export const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const PostHeader = styled.header`
  margin-bottom: 32px;
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 24px 0;
  color: #333;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  span {
    font-weight: 500;
    color: #333;
  }
`;

export const PostDate = styled.time`
  color: #666;
  font-size: 0.875rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const PostContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  
  p {
    margin-bottom: 24px;
  }
  
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 32px 0 16px;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 24px 0 12px;
  }
  
  ul, ol {
    margin: 16px 0;
    padding-left: 24px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 16px;
    margin: 24px 0;
    font-style: italic;
    color: #666;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 24px 0;
  }
  
  code {
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }
  
  pre {
    background: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 24px 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
`; 