"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/assets";
import { LanguageManager } from "@/lang/LanguageManager";
import useTrans from "@/lang/useTrans";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  RightSection,
  LanguageButton,
  LanguageDropdown,
  LanguageOption,
  MobileMenuButton,
  Overlay,
  NavItemText,
  NavItem,
  LoginButton,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  LogoutButton,
} from "./headerStyle";
import { useAuth } from "@/hooks/useAuth";

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

type LanguageValue = (typeof TypeLanguage)[keyof typeof TypeLanguage];

export const Header = () => {
  const { handleLogout, getCurrentUser } = useAuth();
  const user = getCurrentUser();
  const trans = useTrans();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentLang(LanguageManager.getLanguage());

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const languageOptions = [
    { key: "EN", value: TypeLanguage.EN },
    { key: "JP", value: TypeLanguage.JP },
    { key: "VI", value: TypeLanguage.VI },
  ];

  const handleLanguageChange = (lang: LanguageValue) => {
    LanguageManager.setLanguage(lang);
    setCurrentLang(lang);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { href: "/#home", label: (trans.header as Record<string, string>).home },
    { href: "/blog", label: (trans.header as Record<string, string>).blog },
    { href: "/#features", label: (trans.header as Record<string, string>).features },
    { href: "/#food", label: (trans.header as Record<string, string>).food },
  ];

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <Link href="/">
            <Logo>
              <Image
                src={Images.common.logo}
                alt="logo"
                width={60}
                height={60}
              />
            </Logo>
          </Link>

          <NavLinks $isOpen={isMenuOpen}>
            {navLinks.map((link) => (
              <NavItem key={link.href}>
                <Link key={link.href} href={link.href} passHref>
                  <NavItemText
                    $scrolled={scrolled}
                    onClick={closeMenu}
                    data-hover={link.label}
                  >
                    {link.label}
                  </NavItemText>
                </Link>
              </NavItem>
            ))}
          </NavLinks>

          <RightSection>
            {!!user ? (
              <UserProfile>
                <UserAvatar>
                  <Image src={user.avatar} alt="avatar" width={40} height={40} />
                </UserAvatar>
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
                </UserInfo>
              </UserProfile>
            ) : (
              <Link href="/login" passHref>
                <LoginButton $scrolled={scrolled}>Đăng nhập</LoginButton>
              </Link>
            )}
            <LanguageButton
              $scrolled={scrolled}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {LANGUAGE_MAP[currentLang as keyof typeof LANGUAGE_MAP]}
              <LanguageDropdown $isOpen={isDropdownOpen}>
                {languageOptions.map(({ key, value }, index) => (
                  <LanguageOption
                    key={key}
                    onClick={() => handleLanguageChange(value)}
                    index={index}
                    $isOpen={isDropdownOpen}
                  >
                    {key}
                  </LanguageOption>
                ))}
              </LanguageDropdown>
            </LanguageButton>

            <MobileMenuButton
              $scrolled={scrolled}
              $isOpen={isMenuOpen}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
          </RightSection>
        </Nav>
      </HeaderContainer>

      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;
