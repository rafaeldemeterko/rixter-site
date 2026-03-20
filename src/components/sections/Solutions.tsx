import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteContent } from "@/content/site";

export function Solutions() {
  const { solutionsSection, solutions } = siteContent;

  return (
    <Section
      id="solucoes"
      withDefaultPadding={false}
      className="relative overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(4,50,66,0.06),_transparent_52%)]"
      />

      <Container className="relative z-10 py-10 sm:py-16 lg:py-20">
        <div className="w-full">
          <div className="flex flex-col items-center text-center">
            <p className="text-[1.08rem] leading-[1.1] font-light tracking-[0.16em] text-[var(--color-primary)] uppercase sm:text-[1.3rem] lg:text-[1.7rem]">
              {solutionsSection.eyebrow}
            </p>

            <h2 className="mt-4 whitespace-nowrap text-[clamp(1.95rem,5vw,4rem)] leading-[1.03] font-bold tracking-[-0.03em] text-[var(--color-text)] sm:mt-5 lg:mt-6">
              {solutionsSection.title}
            </h2>

            <p className="mt-6 max-w-[56rem] text-[1.08rem] leading-[1.65] font-light text-[var(--color-primary)] sm:text-[1.2rem] lg:mt-7 lg:max-w-[60rem] lg:text-[1.32rem]">
              {solutionsSection.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-12">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="flex flex-col rounded-[1.5rem] border border-[rgba(4,50,66,0.12)] bg-[#f9fbfc] p-6 shadow-[5px_7px_18px_rgba(0,0,0,0.12)] sm:p-7 md:h-full md:min-h-[29rem] lg:min-h-[25rem] xl:min-h-[23.5rem]"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    aria-hidden
                    className="mt-1 h-14 w-14 shrink-0 rounded-[1rem] bg-[var(--color-primary)] shadow-[5px_7px_13px_rgba(4,50,66,0.18)]"
                  />

                  <h3 className="max-w-[16ch] text-[1.5rem] leading-[1.02] font-bold tracking-[-0.025em] text-[var(--color-primary)] sm:text-[1.7rem] lg:text-[1.9rem]">
                    {solution.title}
                  </h3>
                </div>

                <p className="mt-4 text-[1.08rem] leading-[1.65] font-light text-[var(--color-primary)] sm:text-[1.18rem] lg:text-[1.24rem]">
                  {solution.description}
                </p>

                <ul className="mt-6 space-y-3 text-[0.98rem] leading-[1.55] font-light text-[#405064] sm:text-[1rem] lg:space-y-3.5">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="pt-[0.08rem] text-[1.05rem] leading-none font-semibold text-[var(--color-primary)]">
                        *
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
