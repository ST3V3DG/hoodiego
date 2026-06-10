"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/animated-theme-toggler";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        return;
      }
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("bg-background", "shadow", "dark:shadow-none", "[&_ul_a]:mix-blend-difference");
          header.classList.remove("lg:bg-transparent");
        } else {
          header.classList.add("lg:bg-transparent");
          header.classList.remove("bg-background", "shadow", "dark:shadow-none", "[&_ul_a]:mix-blend-difference");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn("w-full transition duration-300 bg-background lg:bg-transparent text-white overflow-hidden fixed top-0 z-50 p-6", className)}>
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link
          href="/"
          className="font-bold uppercase tracking-[0.2em] text-primary"
        >
          HOODIEGO
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <nav className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em]">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="hover:opacity-60 transition-opacity"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="hover:opacity-60 transition-opacity"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:opacity-60 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/*<div className="flex gap-8">
              <Link href="#" className="hover:opacity-60 transition-opacity">
                Cart (0)
              </Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">
                Nouveautés
              </Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">
                Guide tailles
              </Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">
                Contact
              </Link>
            </div>*/}
            {/*<div className="flex gap-8">
              <Link href="#" className="hover:opacity-60 transition-opacity">
                Panier (0)
              </Link>
              <Link
                href="mailto:contact@hoodiego.store"
                className="hover:opacity-60 transition-opacity"
              >
                contact@hoodiego.store
              </Link>
            </div>*/}
          </nav>
          <AnimatedThemeToggler className="text-primary" duration={700} />
        </div>
      </div>
    </header>
  );
}
