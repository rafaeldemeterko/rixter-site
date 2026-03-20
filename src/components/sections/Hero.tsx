import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <Section
      id="inicio"
      withDefaultPadding={false}
      className="relative min-h-[680px] overflow-hidden bg-[#ffffff] lg:min-h-[760px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero/hero-main.webp"
          alt=""
          fill
          priority
          className="scale-105 object-cover object-[center_55%] lg:object-[center_62%]"
          style={{
            opacity: "var(--hero-image-opacity)",
            filter: "blur(var(--hero-image-blur))",
          }}
        />
      </div>

      <Container className="relative z-10 grid min-h-[680px] items-center gap-10 py-10 sm:py-16 lg:min-h-[760px] lg:grid-cols-[minmax(0,1.16fr)_minmax(24rem,0.84fr)] lg:gap-10 lg:py-20 xl:grid-cols-[minmax(0,1.22fr)_minmax(28rem,0.78fr)] 2xl:gap-14">
        <div className="min-w-0 max-w-[56rem] space-y-5 sm:space-y-6 xl:max-w-[60rem]">
          <h1 className="max-w-[54rem] text-[clamp(2.85rem,10vw,3.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--color-text)] text-balance sm:text-[clamp(3.35rem,7.1vw,4.7rem)] sm:leading-[1.12] lg:text-[clamp(3.56rem,6.27vw,5.37rem)] lg:leading-[1.14]">
            <span className="lg:block">Soluções em </span>
            <span className="text-[var(--color-primary)] lg:block">Materiais Elétricos </span>
            <span className="lg:block">para a Indústria</span>
          </h1>

          <p className="max-w-[34rem] text-[1rem] leading-[1.55] font-light text-[var(--color-muted)] text-pretty sm:max-w-[40rem] sm:text-[1.18rem] lg:max-w-[46rem] lg:text-[1.45rem]">
            {siteContent.hero.description}
          </p>

          <ul className="max-w-[34rem] flex flex-wrap gap-x-4 gap-y-2 pt-1 sm:max-w-[40rem] sm:gap-x-5 sm:gap-y-3 sm:pt-2 lg:max-w-[46rem]">
            {siteContent.hero.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Image
                  src="/assets/icons/ui/check.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden
                  className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                />
                <span className="text-[1.05rem] leading-[1.4] font-light text-[var(--color-text)] sm:text-[1.18rem] lg:text-[1.45rem] lg:leading-[1.45]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row">
            <Button
              href={siteContent.hero.primaryCta.href}
              className="rounded-2xl px-7 py-3.5 text-[1rem] font-light shadow-[0_10px_24px_rgba(4,50,66,0.2)] sm:px-11 sm:py-[1.05rem] sm:text-[1.38rem]"
            >
              {siteContent.hero.primaryCta.label}
              {" ->"}
            </Button>

            <Button
              href={siteContent.hero.secondaryCta.href}
              variant="secondary"
              className="rounded-2xl border border-[var(--color-primary)] px-7 py-3.5 text-[1rem] font-light text-[var(--color-primary)] shadow-[0_10px_24px_rgba(4,50,66,0.2)] sm:px-11 sm:py-[1.05rem] sm:text-[1.38rem]"
            >
              {siteContent.hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div aria-hidden className="hidden items-center justify-end lg:flex">
          <div className="w-full max-w-[720px] xl:max-w-[760px]">
            <Image
              src="/assets/brand/outline-logo.svg"
              alt=""
              width={1080}
              height={1080}
              className="ml-auto h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
