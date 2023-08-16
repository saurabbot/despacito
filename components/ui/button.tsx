import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        disabled: "bg-slate-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      color: {
        primary:
          "bg-brand-default hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-brand-default text-brand disabled:bg-brand-subtle disabled:text-brand-subtle disabled:opacity-40 disabled:hover:bg-brand-subtle disabled:hover:text-brand-default disabled:hover:opacity-40",
        secondary:
          "text-emphasis border border-default  bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default",
        minimal:
          "text-emphasis hover:bg-subtle focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-transparent disabled:hover:text-muted disabled:hover:border-subtle",
        destructive:
          "border border-default text-emphasis hover:text-red-700 focus-visible:text-red-700  hover:border-red-100 focus-visible:border-red-100 hover:bg-error  focus-visible:bg-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-red-700 disabled:bg-red-100 disabled:border-red-200 disabled:text-red-700 disabled:hover:border-red-200 disabled:opacity-40",
        loading: "bg-slate-300",
      },
      loading: {
        true: "cursor-wait",
      },
    },
    compoundVariants: [
      // Primary variants
      {
        loading: true,
      },
    ],

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
type ButtonBaseProps = {
  loading: boolean;
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, loading }))}
        ref={ref}
        {...props}
        disabled={loading}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
