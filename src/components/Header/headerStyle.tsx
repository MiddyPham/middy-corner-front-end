import styled, { css, keyframes } from 'styled-components'

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

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }
  20%, 40%, 60%, 80% { transform: translateX(1px); }
`;

export const NavItem = styled.div<{ hasDropdown?: boolean }>`
  font-weight: 800;
  font-size: 23px;
  line-height: 26px;
  height: 26px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #000000;
  text-shadow: 1px 1px 0px #333333;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const NavItemText = styled.div<{ $scrolled: boolean }>`
  position: relative;
  transition: transform 0.3s ease;
  color: #000000;
  height: 26px;
  line-height: 26px;
  
  &:hover {
    transform: translateY(-100%);
  }

  &::after {
    content: attr(data-hover);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    color: #333333;
  }

  @media (max-width: 768px) {
    color: #000000;
    font-size: 1.2rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid #000000;
  padding: 8px 12px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 4px 4px 0px #333333;

  input {
    border: none;
    outline: none;
    padding: 4px;
    background: transparent;
    color: #000000;
    font-weight: 600;
    
    &::placeholder {
      color: #666666;
    }
  }

  svg {
    margin-right: 8px;
    color: #333333;
  }
`

export const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 4px solid #000000;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  box-shadow: ${props => props.$scrolled 
    ? '0 8px 0px #333333' 
    : 'none'};
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-weight: 800;
  font-size: 1.5rem;
  color: #000000;
  text-shadow: 2px 2px 0px #333333;
  
  img {
    transition: all 0.3s ease;
  }
  
  &:hover {
    ${css`animation: ${wiggle} 0.5s ease;`}
  }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background: #ffffff;
    border-left: 4px solid #000000;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 6rem;
    transition: right 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '8px 0px 0px #333333' : 'none'};
  }
`;

export const NavLink = styled.div<{ $scrolled: boolean }>`
  color: #000000;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  font-size: large;
  font-weight: 800;
  text-decoration: none;
  height: 26px;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 1px 1px 0px #333333;
  
  &::before {
    content: attr(data-hover);
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    color: #333333;
    transition: top 0.3s ease;
  }
  
  &:hover {
    transform: translateY(100%);
    color: transparent;
    ${css`animation: ${bounce} 0.5s ease;`}
    
    &::before {
      top: 0;
    }
  }
  
  @media (max-width: 768px) {
    color: #000000;
    font-size: 1.2rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const LanguageButton = styled.div<{ $scrolled: boolean }>`
  position: relative;
  color: #000000;
  font-weight: 800;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #000000;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${wiggle} 0.5s ease;`}
  }
`;

export const LanguageDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 1px;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

export const LanguageOption = styled.div<{ index: number; $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 4px 4px 0px #333333;
  
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-delay: ${props => props.$isOpen ? `${props.index * 0.07}s` : '0s'};
  
  transform-origin: center;
  transform: ${({ index, $isOpen }) => {
    const initialTransform = 'translate(-50%, -50%) scale(0)';
    const finalTransforms = [
      'translate(-22.5px, 25px) scale(1)',
      'translate(30px, 15px) scale(1)',
      'translate(-75px, 15px) scale(1)',
    ];
    return $isOpen ? finalTransforms[index] || initialTransform : initialTransform;
  }};

  &:hover {
    background: #000000;
    color: #ffffff;
    transform: ${({ index, $isOpen }) => {
      const hoverTransforms = [
        'translate(-22.5px, 25px) scale(1.15)',
        'translate(30px, 15px) scale(1.15)',
        'translate(-75px, 15px) scale(1.15)',
      ];
      return $isOpen ? hoverTransforms[index] || 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(0)';
    }};
    box-shadow: 6px 6px 0px #333333;
  }
`;

export const LoginButton = styled.button<{ $scrolled: boolean }>`
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${bounce} 0.5s ease;`}
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1.2rem;
  }
`;

export const MobileMenuButton = styled.button<{ $scrolled: boolean; $isOpen: boolean }>`
  display: none;
  background: #ffffff;
  border: 3px solid #000000;
  cursor: pointer;
  padding: 0.5rem;
  color: #000000;
  border-radius: 10px;
  box-shadow: 4px 4px 0px #333333;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1001;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0px #333333;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: #000000;
    transition: all 0.3s ease;
    transform-origin: center;
    border-radius: 2px;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  img {
    border: 3px solid #000000;
    border-radius: 50%;
    box-shadow: 4px 4px 0px #333333;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    
    img {
      box-shadow: 6px 6px 0px #333333;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const UserName = styled.p`
  color: #000000;
  font-weight: 800;
  font-size: 1rem;
  margin: 0;
  text-shadow: 1px 1px 0px #333333;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const LogoutButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${wiggle} 0.5s ease;`}
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
  }
`;
