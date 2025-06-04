import styled from 'styled-components';

export const CommentContainer = styled.div`
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 16px;
  background: white;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const CommentAuthor = styled.div`
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

export const CommentDate = styled.time`
  color: #666;
  font-size: 0.875rem;
`;

export const CommentContent = styled.div`
  margin-top: 12px;
`;

export const CommentText = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
  white-space: pre-wrap;
`;

export const NoComments = styled.div`
  text-align: center;
  padding: 32px;
  color: #666;
  font-size: 1rem;
  background: #f9f9f9;
  border-radius: 12px;
  margin: 24px 0;
`; 