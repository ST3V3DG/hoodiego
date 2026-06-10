import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function RadioColorSelector({
  id,
  name,
  color,
  className,
  label,
  matchColor,
  onClick,
  size = "default",
}: {
  id: string;
  name: string;
  color: string;
  className?: string;
  label: string;
  matchColor?: string;
  onClick?: (color: string) => void;
  size?:
    | "default"
    | "sm"
    | "lg"
    | "xs"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
}) {
  return (
    <Button
      variant="ghost"
      className={cn("p-0 rounded-full overflow-hidden relative", className)}
      type="button"
      size={size}
      onClick={() => (onClick ? onClick(color) : undefined)}
    >
      <Label
        className="size-full cursor-pointer"
        htmlFor={id}
        style={{ backgroundColor: color }}
      >
        <span className="sr-only">{label}</span>
        <Input
          id={id}
          type="radio"
          name={name}
          value={color}
          defaultChecked={matchColor ? color === matchColor : undefined}
          className="not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer size-full transition-colors duration-300"
          style={{ accentColor: color }}
        />
      </Label>
    </Button>
  );
}
