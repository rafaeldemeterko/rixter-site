type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withDefaultPadding?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  withDefaultPadding = true,
}: SectionProps) {
  const basePaddingClass = withDefaultPadding ? "py-14 sm:py-16 lg:py-24" : "";

  return (
    <section
      id={id}
      className={`scroll-mt-24 lg:scroll-mt-28 ${basePaddingClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
