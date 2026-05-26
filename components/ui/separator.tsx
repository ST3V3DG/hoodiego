import type * as React from "react";
import { cn } from "@/lib/utils";

function Separator({ className, ...props }: React.ComponentProps<"hr">) {
  return (
    <hr
      data-slot="separator"
      className={cn("shrink-0 border-border", className)}
      {...props}
    />
  );
}

export { Separator };
