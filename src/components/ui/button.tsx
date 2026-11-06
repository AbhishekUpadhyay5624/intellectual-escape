import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ink-accent text-bg-primary hover:bg-ink-accent-hover shadow",
        ghost:
          "text-ink-secondary hover:text-ink-primary hover:bg-bg-card",
        outline:
          "border border-border text-ink-secondary hover:border-border-accent hover:text-ink-primary",
        accent:
          "bg-ink-accent/10 border border-ink-accent/20 text-ink-accent hover:bg-ink-accent/20",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "px-3 py-2 text-xs",
        lg: "px-7 py-3.5 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
