"use client";

import { Button } from "@/components/ui/button";

export function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="ghost"
      className="text-xs font-bold uppercase tracking-widest hover:bg-primary rounded-full transition-colors text-primary-foreground"
      onClick={() => scrollToTop()}
    >
      Back to top ↑
    </Button>
  );
}