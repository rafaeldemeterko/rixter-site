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

      <Container className="relative z-10 grid min-h-[680px] items-center gap-12 py-14 sm:py-16 lg:min-h-[760px] lg:grid-cols-[minmax(0,1.16fr)_minmax(24rem,0.84fr)] lg:gap-10 lg:py-20 xl:grid-cols-[minmax(0,1.22fr)_minmax(28rem,0.78fr)] 2xl:gap-14">
        <div className="min-w-0 max-w-[56rem] space-y-6 xl:max-w-[60rem]">
          <h1 className="max-w-[54rem] text-[clamp(3.56rem,6.27vw,5.37rem)] font-bold leading-[1.14] tracking-[-0.02em] text-[var(--color-text)] text-balance">
            <span className="block">Soluções em</span>
            <span className="block text-[var(--color-primary)]">Materiais Elétricos</span>
            <span className="block">para a Indústria</span>
          </h1>

          <p className="max-w-[46rem] text-[1.45rem] leading-[1.45] font-light text-[var(--color-muted)] text-pretty">
            {siteContent.hero.description}
          </p>

          <ul className="max-w-[46rem] flex flex-wrap gap-x-5 gap-y-3 pt-2">
            {siteContent.hero.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Image
                  src="/assets/icons/ui/check.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden
                  className="h-[18px] w-[18px] shrink-0"
                />
                <span className="text-[1.45rem] leading-[1.45] font-light text-[var(--color-text)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteContent.hero.primaryCta.href}
              className="rounded-2xl px-9 py-[1.05rem] text-[1.38rem] font-light shadow-[0_10px_24px_rgba(4,50,66,0.2)] sm:px-11"
            >
              {siteContent.hero.primaryCta.label}
              {" ->"}
            </Button>

            <Button
              href={siteContent.hero.secondaryCta.href}
              variant="secondary"
              className="rounded-2xl border border-[var(--color-primary)] px-9 py-[1.05rem] text-[1.38rem] font-light text-[var(--color-primary)] shadow-[0_10px_24px_rgba(4,50,66,0.2)] sm:px-11"
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
