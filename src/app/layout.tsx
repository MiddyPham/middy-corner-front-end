import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';
import { MainLayout, MainContent } from "../components/HomePage/indexStyle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Blog Corner - Nơi chia sẻ kiến thức',
  description: 'Khám phá những bài viết đặc sắc, chia sẻ kiến thức và kết nối với cộng đồng qua những câu chuyện thú vị và insights có giá trị',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <MainLayout>
            <MainContent>
              {children}
            </MainContent>
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
