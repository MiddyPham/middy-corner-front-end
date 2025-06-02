import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 48px 32px 24px;
  border-top: 1px solid #eee;
  margin-top: auto;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`

export const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
`

export const FooterText = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 32px auto 0;
  padding-top: 24px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialLink = styled.a`
  color: #666;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
`

export const Copyright = styled.p`
  color: #666;
  font-size: 14px;
`