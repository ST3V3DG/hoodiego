"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface RollRevealContextProps {
  hover: boolean;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const RollRevealContext = React.createContext<
  RollRevealContextProps | undefined
>(undefined);

const useRollRevealContext = () => {
  const context = React.useContext(RollRevealContext);
  if (!context) {
    throw new Error("useOriginContext must be used within a OriginProvider");
  }
  return context;
};

export function RollRevealButton({
  className,
  children,
  icon,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <RollRevealContext.Provider value={{ hover, setHover }}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
        className={cn(
          "relative w-fit overflow-hidden rounded-full  px-6 py-3 flex items-center gap-3 cursor-pointer select-none",
          "transition-all duration-300 group active:scale-95",
          className,
        )}
        type="button"
      >
        <div
          className={cn(
            `absolute  inset-y-0 my-auto flex items-center justify-center size-8 rounded-full ${hover ? "bg-foreground text-primary" : " bg-primary text-white "}  `,
            "transition-all duration-500",
            "left-0 group-hover:left-[calc(100%-2.5rem)] group-hover:rotate-360 z-10",
          )}
        >
          {icon ?? <ChevronUpRightIcon />}
        </div>
        {children}
      </button>
    </RollRevealContext.Provider>
  );
}

export function RollRevealButtonText({
  className,
  text = "Booking a Call",
  icon = null,
}: {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "relative p-1 text-base rounded-full text-foreground font-medium",
        "group-hover:-translate-x-6 transition-transform duration-500 px-4 ml-4 bg-background  overflow-hidden h-10 flex items-center min-w-30 justify-center",
        className,
      )}
    >
      <span key={text} className="inline-block">
        <RollRevealButtonTextOverlay
          text={text}
          icon={icon}
          className={className}
        />

        {/* visible text */}
        <span className="flex items-center gap-2">
          {icon}
          {text}
        </span>
      </span>
    </span>
  );
}

interface RollRevealButtonTextOverlayProps {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
}

export function RollRevealButtonTextOverlay({
  className,
  text = "Booking a Call",
  icon,
}: RollRevealButtonTextOverlayProps) {
  const { hover } = useRollRevealContext();
  return (
    <div
      className={cn(
        "absolute inset-0 px-4  bg-primary  text-white overflow-hidden h-10 flex items-center min-w-30 transition-[clip-path] duration-800 linear  gap-2 justify-center",
        className,
      )}
      style={{
        clipPath: hover
          ? "ellipse(150px 150px at 10% 20%)"
          : `ellipse(0px 0px at 0% 100%)`,
      }}
    >
      {icon}
      {text}
    </div>
  );
}

/* ICON */
function ChevronUpRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" />
    </svg>
  );
}
