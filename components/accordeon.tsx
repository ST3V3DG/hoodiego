"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccordeonItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

type AccordeonProps = {
  children: ReactNode;
  className?: string;
};

export function Accordeon({ children, className }: AccordeonProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

export function AccordeonItem({
  title,
  children,
  defaultOpen,
  className,
}: AccordeonItemProps) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group rounded-sm border dark:bg-zinc-900/50 bg-background transition-all open:border-zinc-800 items-center justify-center px-4 py-2 font-bold duration-200 ease-in-out shadow-[4px_4px_0px_var(--color-primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--color-primary)] active:translate-x-1 active:translate-y-1 active:shadow-none",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium dark:text-primary transition-colors hover:text-primary/80 group-open:text-primary">
        {title}
        <ChevronDown className="size-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-900/80 dark:text-white">
        {children}
      </p>
    </details>
  );
}
