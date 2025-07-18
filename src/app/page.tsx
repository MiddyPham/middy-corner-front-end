"use client";
import { useState, useEffect } from "react";
import "../styles/global.css";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
