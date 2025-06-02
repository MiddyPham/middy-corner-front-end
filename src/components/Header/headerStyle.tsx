import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 8px;
  background-color: #fff;
  position: relative;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  min-width: 20px;
  min-height: 20px;
  justify-content: center;

  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
`

export const LanguageDropdown = styled.div<{ 'data-is-open': boolean }>`
  position: absolute;
  right: 100%;
  margin-right: 8px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 4px;
  box-sizing: border-box;
  z-index: 1000;
  opacity: ${props => props['data-is-open'] ? 1 : 0};
  transform: ${props => props['data-is-open'] ? 'translateX(0)' : 'translateX(10px)'};
  visibility: ${props => props['data-is-open'] ? 'visible' : 'hidden'};
  transition: all 0.2s ease-in-out;
`

export const LanguageOption = styled.div`
  padding: 10px 14px;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  color: #000;
  
  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
`