import { siteContent } from "@/content/site";
import { Container } from "./Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container className="pt-10 pb-5 lg:pt-12 lg:pb-6">
        <div className="space-y-0">
          <div className="grid grid-cols-[minmax(170px,270px)_1fr] items-end gap-8 lg:gap-12">
            <div className="flex h-full flex-col justify-end">
              <Image
                src="/assets/brand/solid-logo.svg"
                alt={`${siteContent.company.shortName} logo`}
                width={190}
                height={190}
                className="h-auto w-[170px] sm:w-[195px] md:w-[225px] lg:w-[250px]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            <div className="flex h-full flex-col justify-start">
              <div className="flex min-h-[210px] flex-col gap-y-8 sm:flex-row sm:items-start sm:justify-between sm:gap-x-20 lg:gap-x-28">
                <div className="flex h-full min-h-[210px] w-full flex-col sm:w-[220px] lg:w-[250px]">
                  <h4 className="text-[1.55rem] font-bold uppercase leading-none text-[#f3f7fb]">
                    Links Rápidos
                  </h4>
                  <ul className="mt-4 space-y-4 text-[1.45rem] font-medium leading-tight">
                    {siteContent.navigation.slice(0, 4).map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="hover:opacity-75">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex h-full min-h-[210px] w-full flex-col sm:w-[300px] lg:w-[360px]">
                  <h4 className="text-[1.55rem] font-bold uppercase leading-none text-[#f3f7fb]">
                    Contato
                  </h4>
                  <ul className="mt-4 space-y-4 text-[1.45rem] font-medium leading-tight">
                    <li>{siteContent.company.city}</li>
                    <li>{siteContent.company.phone}</li>
                    <li>{siteContent.company.email}</li>
                  </ul>
                </div>

                <div className="flex h-full min-h-[210px] w-full flex-col sm:w-[240px] lg:w-[280px]">
                  <h4 className="text-[1.55rem] font-bold uppercase leading-none text-[#f3f7fb]">
                    Horário
                  </h4>
                  <ul className="mt-4 space-y-4 text-[1.45rem] font-medium leading-tight">
                    <li>Segunda à Sexta</li>
                    <li>8h às 18h</li>
                    <li>Sábado</li>
                    <li>8h às 12h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2 pt-0 md:grid-cols-[minmax(170px,270px)_1fr_auto] md:items-end md:gap-x-6">
            <p className="text-[0.92rem] leading-none font-bold tracking-[0.01em] text-[#d6e1ea] whitespace-nowrap sm:text-[0.96rem] md:pl-1 md:text-[0.98rem] lg:text-[1.03rem]">
              Eletro Representação Comercial
            </p>
            <p className="text-[1.2rem] leading-[1.35] font-light text-[#d6e1ea] md:text-center">
              Conectando os melhores fabricantes de materiais elétricos às empresas
              que constroem o Brasil.
            </p>
            <p className="text-[1.9rem] font-bold leading-none text-[#f3f7fb] md:justify-self-end md:pr-3">
              Deus é fiel e justo!
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
