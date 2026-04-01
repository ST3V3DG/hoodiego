"use client";

import Link from "next/link";
import { useEffect } from "react";

export function Header() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(max-width: 1023px)").matches) {
        return;
      }
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("bg-black");
          header.classList.remove("lg:bg-transparent");
        } else {
          header.classList.add("lg:bg-transparent");
          header.classList.remove("bg-black");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full transition duration-300 bg-black lg:bg-transparent text-white overflow-hidden fixed top-0 z-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 text-[10px] uppercase tracking-[0.2em]">
        <div className="flex gap-8">
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Collection
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            New Arrivals
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Size Guide
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </div>
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
        <div className="flex gap-8">
          {/*<Link href="#" className="hover:opacity-60 transition-opacity">
            Panier (0)
          </Link>*/}
          <Link
            href="mailto:contact@hoodiego.store"
            className="hover:opacity-60 transition-opacity"
          >
            contact@hoodiego.store
          </Link>
        </div>
      </nav>
    </header>
  );
}
