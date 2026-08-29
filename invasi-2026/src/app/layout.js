/* eslint-disable @next/next/no-page-custom-font */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );
    reveals.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (pathname !== "/") {
        const scrollY = window.scrollY;
        document.body.style.backgroundPositionY = scrollY * 0.4 + "px";
      } else {
        document.body.style.backgroundPositionY = "center top";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);

  return (
    <html lang="id">
      <head>
        <title>INVASI 2026</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="navbar">
          <div className="logo">INVASI</div>
          <nav className="nav-links">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Utama
            </Link>
            <Link
              href="/kompetisi"
              className={pathname === "/kompetisi" ? "active" : ""}
            >
              Kompetisi
            </Link>
            <Link
              href="/panduan"
              className={pathname === "/panduan" ? "active" : ""}
            >
              Panduan
            </Link>
            <Link href="/twn" className={pathname === "/twn" ? "active" : ""}>
              Talkshow & Webinar
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
