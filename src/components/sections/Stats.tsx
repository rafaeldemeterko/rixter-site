import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { AnimatedStatValue } from "@/components/ui/AnimatedStatValue";

export function Stats() {
  return (
    <section className="border-y border-[#2b5160] bg-[var(--color-primary)]">
      <Container className="grid gap-6 py-8 sm:grid-cols-3 sm:gap-0 lg:py-10">
        {siteContent.stats.map((item, index) => (
          <div
            key={item.label}
            className={`text-center sm:px-6 ${
              index > 0 ? "sm:border-l sm:border-[#2b5160]" : ""
            }`}
          >
            <p className="text-[3rem] leading-none font-bold tracking-[-0.025em] text-white sm:text-[4rem] lg:text-[4.3rem]">
              <AnimatedStatValue value={item.value} />
            </p>
            <p className="mt-2.5 text-[1.08rem] leading-[1.25] font-light text-[#d4e2e8] sm:text-[1.25rem]">
              {item.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
