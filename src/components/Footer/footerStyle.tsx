import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 24px 32px;
  border-top: 1px solid #eee;
  margin-top: auto;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Copyright = styled.p`
  color: #666;
  font-size: 14px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: var(--primary-color);
  }
`