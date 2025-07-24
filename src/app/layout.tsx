"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "../styles/global.css";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function RedirectHandler({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect từ / về /user
    if (pathname === "/") {
      router.replace("/user");
    }
  }, [pathname, router]);

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} geist_e531`}
        suppressHydrationWarning
      >
        <Providers>
          <StyledComponentsRegistry>
            <RedirectHandler>{children}</RedirectHandler>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
