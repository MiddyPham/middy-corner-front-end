import Link from "next/link";
import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

export const AdminContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  
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

export const AdminHeader = styled.header`
  background: #ffffff;
  padding: 0 2rem;
  border-bottom: 4px solid #000000;
  box-shadow: 0 8px 0px #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const AdminTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-shadow: 2px 2px 0px #333333;
`;

export const LogoutButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 0.8rem 1.5rem;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  transition: all 0.3s ease;
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

export const AdminContent = styled.main`
  max-width: 1200px;
  margin: 20px auto 0;
  padding: 2rem;
  position: relative;
  z-index: 5;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const DashboardCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  border: 4px solid #000000;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      12px 12px 0px #333333,
      inset 0 0 0 2px #ffffff;
    animation: ${bounce} 0.5s ease;
  }
  
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

export const CardNumber = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  text-shadow: 3px 3px 0px #333333;
`;

export const CardLabel = styled.div`
  color: #333333;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 0px #333333;
`;

export const CreatePostButton = styled(Link)`
  background: #000000;
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 4px solid #000000;
  border-radius: 15px;
  font-weight: 800;
  display: inline-block;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const PostsTable = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid #000000;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  padding: 1.5rem;
  background: #f8f8f8;
  font-weight: 800;
  color: #000000;
  border-bottom: 3px solid #000000;
  text-shadow: 1px 1px 0px #333333;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  padding: 1.5rem;
  border-bottom: 2px solid #000000;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
    transform: translateX(5px);
    box-shadow: inset 4px 0px 0px #333333;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  background: ${props => props.variant === 'delete' ? '#000000' : '#333333'};
  color: #ffffff;
  border: 2px solid #000000;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px #666666;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px #666666;
    animation: ${bounce} 0.3s ease;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #666666;
  }
`;

export const StatusBadge = styled.span<{ status: 'published' | 'draft' }>`
  background: ${props => props.status === 'published' ? '#000000' : '#ffffff'};
  color: ${props => props.status === 'published' ? '#ffffff' : '#000000'};
  border: 2px solid #000000;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 800;
  box-shadow: 3px 3px 0px #333333;
`;