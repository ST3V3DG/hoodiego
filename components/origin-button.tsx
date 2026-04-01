"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OriginContextProps {
  isHolding: boolean;
  setIsHolding: React.Dispatch<React.SetStateAction<boolean>>;
  direction: "0" | "100";
  setdirection: React.Dispatch<React.SetStateAction<"0" | "100">>;
}

const OriginContext = React.createContext<OriginContextProps | undefined>(
  undefined,
);

const useOriginContext = () => {
  const context = React.useContext(OriginContext);
  if (!context) {
    throw new Error("useOriginContext must be used within a OriginProvider");
  }
  return context;
};

interface OriginButtonProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  icon?: React.ReactNode;
  onComplete?: () => void;
}

export function OriginButton({
  children,
  className,
  text = "Hover Me",
  icon,
  onComplete,
}: OriginButtonProps) {
  const [isHolding, setIsHolding] = useState(false);
  const [direction, setdirection] = useState<"0" | "100">("0");

  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const _y = event.clientY - rect.top;

    if (x < rect.width / 2) {
      setdirection("0");
    } else {
      setdirection("100");
    }
    setIsHolding(true);
  };

  return (
    <OriginContext.Provider
      value={{ isHolding, setIsHolding, direction, setdirection }}
    >
      <Button
        ref={ref}
        onMouseMove={(event) => {
          handleMouseMove(event);
        }}
        onMouseLeave={() => setIsHolding(false)}
        onClick={onComplete}
        className={cn(
          "relative rounded-full p-2 px-5 overflow-hidden bg-background cursor-pointer active:scale-95 transition-transform duration-200 flex items-center gap-2",
          className,
        )}
      >
        {children}
        {icon}
        {text}
      </Button>
    </OriginContext.Provider>
  );
}

interface OriginButtonProps {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
}

export function OriginButtonOverlay({
  className,
  text = "Hover Me",
  icon,
}: OriginButtonProps) {
  const { isHolding, direction } = useOriginContext();

  return (
    <div
      className={cn(
        "absolute inset-0 p-2 px-5 text-white bg-red-400 transition-[clip-path] duration-800 linear flex items-center gap-2 justify-center",
        className,
      )}
      style={{
        clipPath: isHolding
          ? "ellipse(150px 150px at 10% 20%)"
          : `ellipse(0px 0px at ${direction}% 100%)`,
      }}
    >
      {icon}
      {text}
    </div>
  );
}
