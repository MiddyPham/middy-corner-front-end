import styled from 'styled-components';

export const BlogListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 32px;
    color: #333;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`; 