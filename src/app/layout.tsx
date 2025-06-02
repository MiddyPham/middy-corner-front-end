'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import styled from 'styled-components';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
