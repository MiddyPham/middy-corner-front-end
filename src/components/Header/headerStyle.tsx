import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 8px;
  background-color: #fff;
  position: relative;
  z-index: 100;
`

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, sans-serif;
`

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const NavItem = styled.div<{ hasDropdown?: boolean }>`
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  cursor: pointer;
  position: relative;
  height: 24px;
  overflow: hidden;
`

export const NavItemText = styled.div`
  position: relative;
  transition: transform 0.3s ease;

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

export const LanguageButton = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  min-width: 80px;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`

export const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
`

export const LanguageOption = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f5f5f5;
  }
`