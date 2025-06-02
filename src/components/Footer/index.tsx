import React, { useState, useEffect } from 'react'
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterText,
  FooterBottom,
  SocialLinks,
  SocialLink,
  Copyright
} from './footerStyle'
import useTrans from "@/lang/useTrans";

const Footer = () => {
  const trans = useTrans();
  const [mounted, setMounted] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const textFooter = trans.footer;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>{textFooter.about.title}</FooterTitle>
          <FooterText>{textFooter.about.description}</FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>{textFooter.quickLinks.title}</FooterTitle>
          <FooterLink href="/blog">{textFooter.quickLinks.blog}</FooterLink>
          <FooterLink href="/food">{textFooter.quickLinks.food}</FooterLink>
          <FooterLink href="/about">{textFooter.quickLinks.about}</FooterLink>
          <FooterLink href="/contact">{textFooter.quickLinks.contact}</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>{textFooter.contact.title}</FooterTitle>
          <FooterText>{textFooter.contact.address}</FooterText>
          <FooterText>{textFooter.contact.email}</FooterText>
          <FooterText>{textFooter.contact.phone}</FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>{textFooter.followUs.title}</FooterTitle>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              {textFooter.followUs.facebook}
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              {textFooter.followUs.twitter}
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              {textFooter.followUs.instagram}
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} Middy Corner. {textFooter.copyright}
        </Copyright>
        <SocialLinks>
          <SocialLink href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </SocialLink>
          <SocialLink href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer
