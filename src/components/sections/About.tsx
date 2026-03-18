import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteContent } from "@/content/site";

const aboutCards = [
  {
    ...siteContent.differentials[0],
    icon: "/assets/icons/about/target.svg",
  },
  {
    ...siteContent.differentials[1],
    icon: "/assets/icons/about/hands.svg",
  },
  {
    ...siteContent.differentials[3],
    icon: "/assets/icons/about/idea.svg",
  },
  {
    ...siteContent.differentials[2],
    icon: "/assets/icons/about/check.svg",
  },
];

export function About() {
  return (
    <Section
      id="about"
      withDefaultPadding={false}
      className="relative min-h-[650px] overflow-hidden bg-[#f0f2fb] lg:min-h-[740px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_50%,rgba(197,204,227,0.32),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 z-[1] hidden w-[clamp(28rem,46vw,48rem)] -translate-y-1/2 xl:right-8 lg:block"
      >
        <div className="relative">
          <Image
            src="/assets/brand/outline-logo.svg"
            alt=""
            width={1080}
            height={1080}
            className="h-auto w-full"
            style={{ filter: "grayscale(1) brightness(2.35) contrast(0.5)" }}
          />

          <ul className="absolute inset-x-[0.75rem] top-[16%] grid grid-cols-2 gap-x-4 gap-y-4">
            {aboutCards.map((card) => (
              <li
                key={card.title}
                className="min-h-[clamp(12.6rem,13.2vw,15.2rem)] rounded-[1.35rem] border border-[rgba(4,50,66,0.14)] bg-white/88 px-4 py-4 lg:px-5 lg:py-5 shadow-[5px_7px_13px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={60}
                  height={60}
                  aria-hidden
                  className="h-[60px] w-[60px] shrink-0"
                />
                <p className="mt-2 text-[1.48rem] leading-[1.08] font-semibold tracking-[-0.01em] text-[var(--color-primary)]">
                  {card.title}
                </p>
                <p className="mt-2 text-[0.93rem] leading-[1.3] text-[#405064]">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="pt-4 pb-6 sm:pt-5 sm:pb-7 lg:pt-10 lg:pb-8">
          <div className="w-full lg:max-w-[58%]">
            <p className="text-[2.17rem] leading-[1.02] font-light tracking-[0.11em] text-[var(--color-primary)] uppercase">
              {siteContent.about.eyebrow}
            </p>

            <h2 className="mt-5 sm:mt-6 text-[clamp(3.22rem,5.72vw,4.91rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--color-text)]">
              <span className="block">Tradição e Experiência</span>
              <span className="block">no Mercado Elétrico</span>
            </h2>

            <div className="mt-8 sm:mt-9 space-y-7 text-[1.77rem] leading-[1.4] font-light text-[var(--color-primary)]">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="grid gap-3 pt-2 sm:grid-cols-2 lg:hidden">
              {aboutCards.map((card) => (
                <li
                  key={`mobile-${card.title}`}
                  className="rounded-[1rem] border border-[rgba(4,50,66,0.12)] bg-white/85 p-4 shadow-[0_10px_30px_rgba(4,50,66,0.1)]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={50}
                    height={50}
                    aria-hidden
                    className="h-[50px] w-[50px] shrink-0"
                  />
                  <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-[1.45] text-[#405064]">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
