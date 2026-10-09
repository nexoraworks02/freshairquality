import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-bold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Solid royal-blue with a chunky bottom edge — works on light or navy.
  primary:
    "btn-primary bg-teal-600 text-white border-b-4 border-teal-800 shadow-[0_10px_24px_-10px_rgba(20,40,80,0.7)] hover:bg-teal-500 hover:-translate-y-0.5 active:translate-y-0 active:border-b-2",
  // Light-default outline. On navy bands pass an override className (see usages).
  secondary:
    "bg-white text-teal-700 border-2 border-teal-600/25 hover:border-teal-600 hover:bg-teal-50",
  ghost: "text-teal-700 hover:bg-teal-50",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};
type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  // `rest` carries only native button attributes (onClick, type, disabled, …);
  // variant/size/className/children are already destructured out above.
  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

// Utility for a secondary button placed on a navy/dark band.
export const onDarkSecondary =
  "!bg-transparent !text-white !border-white/40 hover:!bg-white/10 hover:!border-white";
