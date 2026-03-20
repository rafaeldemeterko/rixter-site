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

      <Container className="relative z-10 grid grid-cols-1 gap-8 pt-8 pb-10 sm:pt-10 sm:pb-10 lg:min-h-[740px] min-[1511px]:grid-cols-[minmax(0,1.16fr)_minmax(24rem,0.84fr)] min-[1511px]:items-center min-[1511px]:gap-10 lg:pt-10 lg:pb-8 min-[1760px]:grid-cols-[minmax(0,1.22fr)_minmax(28rem,0.78fr)] 2xl:gap-14">
        <div className="min-w-0 w-full max-w-[42rem] sm:max-w-[52rem] md:max-w-none min-[1511px]:max-w-[56rem] min-[1760px]:max-w-[60rem]">
          <p className="text-[0.98rem] leading-[1.1] font-light tracking-[0.14em] text-[var(--color-primary)] uppercase sm:text-[1.2rem] lg:text-[1.55rem] lg:tracking-[0.12em] min-[1511px]:text-[2.17rem] min-[1511px]:tracking-[0.11em]">
            {siteContent.about.eyebrow}
          </p>

          <h2 className="mt-4 max-w-none text-[clamp(2.5rem,8.6vw,3.35rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[var(--color-text)] sm:mt-5 sm:text-[clamp(2.9rem,7vw,4.1rem)] sm:leading-[1.1] lg:mt-6 lg:max-w-none lg:text-[clamp(2.9rem,4.7vw,4.15rem)] lg:leading-[1.04] lg:tracking-[-0.025em] min-[1511px]:max-w-[54rem] min-[1511px]:text-[clamp(3.22rem,5.72vw,4.91rem)] min-[1511px]:leading-[1.08] min-[1511px]:tracking-[-0.02em] min-[1511px]:text-balance">
            <span className="min-[1511px]:block">Tradição e Experiência </span>
            <span className="min-[1511px]:block">no Mercado Elétrico</span>
          </h2>

          <div className="mt-6 max-w-[34rem] space-y-5 text-[1rem] leading-[1.55] font-light text-[var(--color-primary)] sm:mt-8 sm:max-w-[40rem] md:max-w-none sm:space-y-6 sm:text-[1.18rem] lg:mt-9 lg:space-y-6 lg:text-[1.45rem] lg:leading-[1.46] min-[1511px]:max-w-[48rem] min-[1511px]:space-y-7 min-[1511px]:text-[1.77rem] min-[1511px]:leading-[1.4]">
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="min-[1511px]:text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative w-full pt-5 min-[1511px]:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden lg:block"
            >
              <div className="absolute top-1/2 right-[-2%] w-[min(34rem,72%)] -translate-y-1/2 opacity-[0.55] xl:w-[min(38rem,74%)]">
                <Image
                  src="/assets/brand/outline-logo.svg"
                  alt=""
                  width={1080}
                  height={1080}
                  className="h-auto w-full"
                  style={{ filter: "grayscale(1) brightness(1.7) contrast(0.95)" }}
                />
              </div>
            </div>

            <ul className="relative z-10 grid w-full gap-3 lg:gap-4">
              {aboutCards.map((card) => (
                <li
                  key={`mobile-${card.title}`}
                  className="rounded-[1rem] border border-[rgba(4,50,66,0.12)] bg-white/85 p-4 shadow-[0_10px_30px_rgba(4,50,66,0.1)] sm:p-5"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={50}
                    height={50}
                    aria-hidden
                    className="h-11 w-11 shrink-0 sm:h-[50px] sm:w-[50px]"
                  />
                  <p className="mt-2 text-[1.05rem] font-semibold text-[var(--color-primary)] sm:text-base">
                    {card.title}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-[1.5] text-[#405064] sm:text-sm">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden className="hidden items-center justify-end min-[1511px]:flex">
          <div className="relative w-full max-w-[720px] xl:max-w-[760px]">
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
      </Container>
    </Section>
  );
}
