import { siteContent } from "@/content/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[#ffffff]">
      <Container className="flex h-24 items-center justify-between lg:h-28">
        <a href="#inicio" aria-label={`${siteContent.company.shortName} - início`}>
          <Image
            src="/assets/brand/header-logo.svg"
            alt={`${siteContent.company.shortName} logo`}
            width={220}
            height={104}
            priority
            className="h-auto w-[180px] sm:w-[200px] lg:w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[1.35rem] font-medium uppercase text-[var(--color-text)] transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contato" className="px-6 py-3.5 text-[0.95rem]">
            Fale com nossa equipe
          </Button>
        </div>
      </Container>
    </header>
  );
}
