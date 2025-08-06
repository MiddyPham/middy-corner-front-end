import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

interface SidebarToggleProps {
  isOpen: boolean;
}

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarToggle = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<SidebarToggleProps>`
  position: fixed;
  top: 50%;
  right: ${props => props.isOpen ? '320px' : '20px'};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-50%) translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${bounce} 0.5s ease;`}
  }
  
  &:active {
    transform: translateY(-50%) translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const SidebarContainer = styled.aside.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<SidebarContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-left: 4px solid #000000;
  box-shadow: -8px 0 0px #333333;
  z-index: 1000;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  ${props => css`animation: ${props.isOpen ? slideIn : slideOut} 0.3s ease;`}
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, #f8f8f8 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, #f0f0f0 0%, transparent 50%);
  }
`;

export const SidebarContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const SidebarHeader = styled.header`
  padding: 1.5rem;
  border-bottom: 3px solid #000000;
  background: #ffffff;
  box-shadow: 0 4px 0px #333333;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000000;
  text-shadow: 2px 2px 0px #333333;
  text-align: center;
`;

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 3px;
    border: 1px solid #000000;
  }
`;

export const SidebarSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 800;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 1.5rem 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #e0e0e0;
  text-shadow: 1px 1px 0px #ffffff;
`;

interface NavItemProps {
  isActive?: boolean;
}

export const NavItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<NavItemProps>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: ${props => props.isActive ? '#000000' : 'transparent'};
  color: ${props => props.isActive ? '#ffffff' : '#000000'};
  border-left: ${props => props.isActive ? '4px solid #333333' : '4px solid transparent'};
  
  &:hover {
    background: ${props => props.isActive ? '#000000' : '#f0f0f0'};
    transform: translateX(-3px);
    box-shadow: ${props => props.isActive ? 'none' : '3px 0 0px #333333'};
    ${css`animation: ${bounce} 0.3s ease;`}
  }
  
  &:active {
    transform: translateX(-1px);
  }
  
  ${props => props.isActive && `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      background: #ffffff;
      border-radius: 50%;
    }
  `}
`;

export const NavIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const NavText = styled.span`
  font-weight: 700;
  flex: 1;
  font-size: 0.95rem;
`;

export const NavBadge = styled.span`
  background: #ff4444;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #333333;
  min-width: 20px;
  text-align: center;
  ${css`animation: ${pulse} 2s infinite;`}
`;

export const SidebarFooter = styled.footer`
  padding: 1rem;
  border-top: 3px solid #000000;
  background: #ffffff;
  box-shadow: 0 -4px 0px #333333;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background: #f8f8f8;
  border: 3px solid #000000;
  border-radius: 15px;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0px #333333;
  }
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  box-shadow: 2px 2px 0px #333333;
  
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    position: relative !important;
    border-radius: 50%;
  }
`;

export const UserDetails = styled.div`
  flex: 1;
`;

export const UserName = styled.div`
  font-weight: 800;
  color: #000000;
  font-size: 0.9rem;
  text-shadow: 1px 1px 0px #ffffff;
`;

export const UserRole = styled.div`
  font-size: 0.8rem;
  color: #666666;
  font-weight: 600;
  text-transform: capitalize;
`;