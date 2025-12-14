import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 before:absolute before:inset-0 before:bg-primary-foreground/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 before:absolute before:inset-0 before:bg-accent/30 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 before:absolute before:inset-0 before:bg-secondary-foreground/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 before:absolute before:inset-0 before:bg-accent/50 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{props.children}</span>
    </Comp>
  )
}

export { Button, buttonVariants }
