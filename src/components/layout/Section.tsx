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
  const anchorOffsetClass = "scroll-mt-[clamp(5rem,6vw,7rem)]";

  return (
    <section
      id={id}
      className={`${anchorOffsetClass} ${basePaddingClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
