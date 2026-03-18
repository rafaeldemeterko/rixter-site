import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#043242] btn-blue-text hover:bg-[#054055]",
  secondary:
    "border border-[var(--color-border)] bg-[#ffffff] text-[var(--color-text)] hover:bg-[var(--color-surface)]",
  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)]",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#043242] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
