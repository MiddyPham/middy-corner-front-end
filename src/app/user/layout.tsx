"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserLayoutContainer, UserMainContent } from "./userLayoutStyle";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
