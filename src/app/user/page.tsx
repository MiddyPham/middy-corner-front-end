'use client'
import { useState, useEffect } from "react";
import HomePage from "@/components/HomePage";

export default function UserPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <HomePage />
  );
}