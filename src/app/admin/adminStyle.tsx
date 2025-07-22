import styled, { keyframes } from 'styled-components';

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

export const AdminContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 2rem;
  
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

export const AdminHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  position: relative;
  z-index: 2;
  
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

export const AdminTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #000000;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0px #333333;
`;

export const AdminSubtitle = styled.p`
  color: #333333;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 600;
`;

export const PostsSection = styled.section`
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  position: relative;
  z-index: 2;
  
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

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: #000000;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 0px #333333;
`;

export const CreateButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 4px solid #000000;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

export const PostCard = styled.div`
  background: #ffffff;
  border: 4px solid #000000;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 
    6px 6px 0px #333333,
    inset 0 0 0 2px #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      8px 8px 0px #333333,
      inset 0 0 0 2px #ffffff;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 4px solid #000000;
`;

export const PostContent = styled.div`
  padding: 1.5rem;
`;

export const PostTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px #333333;
`;

export const PostExcerpt = styled.p`
  color: #333333;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const PostMeta = styled.div`
  margin-bottom: 1rem;
`;

export const PostDate = styled.span`
  color: #666666;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const PostActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px #333333;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0px #333333;
    animation: ${wiggle} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background: #f8f8f8;
  border: 3px solid #000000;
  border-radius: 15px;
  box-shadow: 4px 4px 0px #333333;
`;

export const EmptyText = styled.p`
  color: #333333;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`; 