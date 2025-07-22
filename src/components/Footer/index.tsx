"use client";

import React from 'react'
import {
  FooterContainer,
  FooterContent,
  Copyright,
  SocialLinks,
  SocialLink
} from './footerStyle'
import useTrans from "@/lang/useTrans";

const Footer = () => {
  const trans = useTrans();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © 2025 Middy Corner. {(trans.footer as Record<string, string>).copyright}
        </Copyright>
        <SocialLinks>
          <SocialLink href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </SocialLink>
          <SocialLink href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
