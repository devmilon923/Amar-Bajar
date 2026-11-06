import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-sm font-medium whitespace-nowrap transition-colors duration-150 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm active:bg-emerald-800",
        primary:
          "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm active:bg-emerald-800",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200/60 active:bg-slate-300",
        outline:
          "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100",
        ghost:
          "text-slate-700 hover:bg-slate-100 active:bg-slate-200",
        destructive:
          "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 active:bg-red-200",
        link:
          "text-emerald-600 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm gap-2 [&_svg]:size-4",
        xs: "h-7 px-2.5 text-xs gap-1.5 [&_svg]:size-3.5",
        sm: "h-8 px-3 text-xs font-medium gap-1.5 [&_svg]:size-3.5",
        lg: "h-10 px-5 text-base gap-2 [&_svg]:size-5",
        icon: "size-9 p-0 [&_svg]:size-4",
        "icon-sm": "size-8 p-0 [&_svg]:size-3.5",
        "icon-lg": "size-10 p-0 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
