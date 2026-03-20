import { siteContent } from "@/content/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-[var(--color-border)] bg-[#ffffff]">
      <Container className="flex h-[clamp(5rem,6vw,7rem)] items-center justify-between gap-6">
        <a href="#inicio" aria-label={`${siteContent.company.shortName} - início`} className="shrink-0">
          <Image
            src="/assets/brand/header-logo.svg"
            alt={`${siteContent.company.shortName} logo`}
            width={220}
            height={104}
            priority
            className="h-auto w-[clamp(10.5rem,11vw,13.75rem)]"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-[clamp(1rem,1.65vw,2rem)] md:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[clamp(0.88rem,0.92vw,1.08rem)] font-medium uppercase tracking-[0.05em] text-[var(--color-text)] transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="shrink-0 md:hidden">
          <MobileMenu items={siteContent.navigation} />
        </div>

        <div className="hidden shrink-0 md:block">
          <Button
            href="#contato"
            className="whitespace-nowrap px-[clamp(1rem,1.3vw,1.6rem)] py-[clamp(0.72rem,0.82vw,0.98rem)] text-[clamp(0.8rem,0.82vw,0.94rem)]"
          >
            Fale com nossa equipe
          </Button>
        </div>
      </Container>
    </header>
  );
}
