import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function RadioSizeSelector({
  id,
  name,
  size,
  className,
  label,
  matchSize,
  onClick,
}: {
  id: string;
  name: string;
  size: string;
  className?: string;
  label: string;
  matchSize?: string;
  onClick?: (size: string) => void;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-lg overflow-hidden relative transition-colors duration-300 has-checked:border has-checked:bg-primary/20 border-primary",
        className,
      )}
      onClick={() => (onClick ? onClick(size) : undefined)}
    >
      <Label
        className="size-full flex place-content-center cursor-pointer"
        htmlFor={id}
      >
        <span>{label}</span>
        <Input
          id={id}
          type="radio"
          name={name}
          value={size}
          defaultChecked={matchSize ? size === matchSize : undefined}
          className="opacity-0 not-checked:invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </Label>
    </Button>
  );
}
