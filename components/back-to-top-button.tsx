"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <Button
      className="text-xs font-bold uppercase tracking-widest hover:bg-primary rounded-full transition-colors flex place-content-center text-white"
      size="lg"
      onClick={() => scrollToTop()}
    >
    <span>Back to top</span> <ArrowUp className="stroke-3" />
    </Button>
  );
}
