'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import styled from 'styled-components';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>
          <Header />
          <MainContent>
            {children}
          </MainContent>
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
