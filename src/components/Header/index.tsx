import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  NavItemText,
  LanguageButton,
  LanguageDropdown,
  LanguageOption,
} from "./headerStyle";
import Image from "next/image";
import Images from "@/assets";
import { LanguageManager } from "@/lang/LanguageManager";
import useTrans from "@/lang/useTrans";
import Link from "next/link";

const LANGUAGE_MAP = {
  en: "EN",
  ja: "JP",
  id: "VI",
} as const;

const TypeLanguage = {
  EN: "en",
  JP: "ja",
  VI: "id",
} as const;

type LanguageKey = keyof typeof TypeLanguage;
type LanguageValue = typeof TypeLanguage[LanguageKey];

const DEFAULT_LANGUAGE = "en";

const Header = () => {
  const trans = useTrans();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentLang(LanguageManager.getLanguage());
  }, []);

  const languageOptions = [
    { key: 'EN', value: TypeLanguage.EN },
    { key: 'JP', value: TypeLanguage.JP },
    { key: 'VI', value: TypeLanguage.VI }
  ];

  const handleLanguageChange = (lang: LanguageValue) => {
    LanguageManager.setLanguage(lang);
    setCurrentLang(lang);
    setIsDropdownOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <HeaderContainer>
      <Logo>
        <Image src={Images.common.logo} alt="logo" width={80} height={80} />
      </Logo>
      <Nav>
        <NavItem>
          <Link href="/blog">
            <NavItemText data-hover={trans.header.blog}>{trans.header.blog}</NavItemText>
          </Link>
        </NavItem>
        <NavItem>
          <NavItemText data-hover={trans.header.food}>{trans.header.food}</NavItemText>
        </NavItem>
      </Nav>
      <LanguageButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {LANGUAGE_MAP[currentLang as keyof typeof LANGUAGE_MAP]}
        <LanguageDropdown data-is-open={isDropdownOpen}>
          {languageOptions.map(({ key, value }) => (
            <LanguageOption 
              key={key}
              onClick={() => handleLanguageChange(value)}
            >
              {key}
            </LanguageOption>
          ))}
        </LanguageDropdown>
      </LanguageButton>
    </HeaderContainer>
  );
};

export default Header;
