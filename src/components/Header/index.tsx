import React, { useState, useEffect } from 'react'
import {
    HeaderContainer,
    Logo,
    Nav,
    NavItem,
    NavItemText,
    LanguageButton,
    LanguageDropdown,
    LanguageOption,
} from './headerStyle'
import Image from "next/image"
import Images from "@/assets"
import { LanguageManager } from '@/lang/LanguageManager'
import useTrans from "@/lang/useTrans"

const LANGUAGE_MAP = {
  en: 'EN',
  ja: 'JP',
  id: 'VI'
} as const

const TypeLanguage = {
    EN: 'en',
    JP: 'ja',
    VI: 'id'
} as const

const Header = () => {
    const trans = useTrans();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState(LanguageManager.getLanguage())

    useEffect(() => {
      setCurrentLang(LanguageManager.getLanguage())
    }, [])

    const handleLanguageChange = (lang: string) => {
      LanguageManager.setLanguage(lang)
      setCurrentLang(lang)
      setIsDropdownOpen(false)
    }

    return (
      <HeaderContainer>
        <Logo>
            <Image src={Images.common.logo} alt="logo" width={80} height={80} />
        </Logo>
        <Nav>
          <NavItem hasDropdown>
            <NavItemText data-hover={trans.header.blog}>{trans.header.blog}</NavItemText>
          </NavItem>
          <NavItem hasDropdown>
            <NavItemText data-hover={trans.header.food}>{trans.header.food}</NavItemText>
          </NavItem>
        </Nav>
        <LanguageButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {LANGUAGE_MAP[currentLang as keyof typeof LANGUAGE_MAP]}
          <LanguageDropdown isOpen={isDropdownOpen}>
            <LanguageOption onClick={() => handleLanguageChange(TypeLanguage.EN)}>EN</LanguageOption>
            <LanguageOption onClick={() => handleLanguageChange(TypeLanguage.JP)}>JP</LanguageOption>
            <LanguageOption onClick={() => handleLanguageChange(TypeLanguage.VI)}>VI</LanguageOption>
          </LanguageDropdown>
        </LanguageButton>
      </HeaderContainer>
    )
  }
  
export default Header