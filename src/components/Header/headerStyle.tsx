import styled from 'styled-components'

export const NavItem = styled.div<{ hasDropdown?: boolean }>`
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  cursor: pointer;
  position: relative;
  height: 24px;
  overflow: hidden;
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const NavItemText = styled.div<{ scrolled: boolean }>`
  position: relative;
  transition: transform 0.3s ease;
  color: ${props => props.scrolled ? '#333' : 'white'};
  
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
  }

  @media (max-width: 768px) {
    color: #333;
    font-size: 1.2rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 4px 8px;
  border-radius: 4px;

  input {
    border: none;
    outline: none;
    padding: 4px;
  }

  svg {
    margin-right: 4px;
    color: #888;
  }
`

export const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 0.5rem 2rem;
  box-shadow: ${props => props.scrolled 
    ? '0 2px 20px rgba(0, 0, 0, 0.1)' 
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
  img {
    transition: all 0.3s ease;
  }
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 6rem;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '0 0 20px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

export const NavLink = styled.div<{ scrolled: boolean }>`
  color: ${props => props.scrolled ? '#333' : 'white'};
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
  height: 26px;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: attr(data-hover);
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ff5678;
    transition: top 0.3s ease;
  }
  
  &:hover {
    transform: translateY(100%);
    color: transparent;
    
    &::before {
      top: 0;
    }
  }
  
  @media (max-width: 768px) {
    color: #333;
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

export const LanguageButton = styled.div<{ scrolled: boolean }>`
  position: relative;
  color: ${props => props.scrolled ? '#333' : 'white'};
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 80%; /* Position anchor below the button */
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 1px;
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
`;

export const LanguageOption = styled.div<{ index: number; isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  background: white;
  color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-delay: ${props => props.isOpen ? `${props.index * 0.07}s` : '0s'};
  
  transform-origin: center;
  transform: ${({ index, isOpen }) => {
    const initialTransform = 'translate(-50%, -50%) scale(0)';
    const finalTransforms = [
      'translate(-22.5px, 25px) scale(1)',  // Bottom-center
      'translate(30px, 15px) scale(1)',   // Bottom-right
      'translate(-75px, 15px) scale(1)',  // Bottom-left
    ];
    return isOpen ? finalTransforms[index] || initialTransform : initialTransform;
  }};

  &:hover {
    background: linear-gradient(45deg, #ff5678, #ff8a9e);
    color: white;
    transform: ${({ index, isOpen }) => {
      const hoverTransforms = [
        'translate(-22.5px, 25px) scale(1.15)',
        'translate(30px, 15px) scale(1.15)',
        'translate(-75px, 15px) scale(1.15)',
      ];
      return isOpen ? hoverTransforms[index] || 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(0)';
    }};
  }
`;

export const LoginButton = styled.button<{ scrolled: boolean }>`
  background: linear-gradient(45deg, #ff5678, #ff8a9e);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 86, 120, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 86, 120, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1.2rem;
  }
`;

export const MobileMenuButton = styled.button<{ scrolled: boolean; isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${props => (props.scrolled || props.isOpen) ? '#333' : 'white'};
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1001;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: currentColor;
    transition: all 0.3s ease;
    transform-origin: center;
    border-radius: 2px;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;
