import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "category"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors",
        variant === "default" && "border-border text-ink-muted",
        variant === "category" && "border-ink-accent/20 text-ink-accent bg-ink-accent/10",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
