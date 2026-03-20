import { siteContent } from "@/content/site";
import { Container } from "./Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container className="pt-10 pb-5 sm:pt-12 lg:pt-12 lg:pb-6">
        <div className="space-y-0">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,290px)_minmax(0,1fr)] lg:items-end lg:gap-10 xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)] xl:gap-12">
            <div className="flex min-w-0 h-full flex-col items-start justify-end">
              <Image
                src="/assets/brand/solid-logo.svg"
                alt={`${siteContent.company.shortName} logo`}
                width={190}
                height={190}
                className="h-auto w-[190px] sm:w-[220px] md:w-[250px] lg:w-[290px]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="mt-1 text-[0.95rem] leading-none font-bold tracking-[0.01em] text-[#d6e1ea] sm:text-[1.05rem] md:text-[1.12rem] lg:text-[1.18rem]">
                Eletro Representação Comercial
              </p>
            </div>

            <div className="flex min-w-0 h-full flex-col justify-start">
              <div className="grid gap-8 sm:grid-cols-2 lg:min-h-[210px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20">
                <div className="flex min-w-0 h-full w-full flex-col lg:min-h-[210px]">
                  <h4 className="text-[1.12rem] font-bold uppercase leading-none text-[#f3f7fb] sm:text-[1.25rem] lg:text-[1.55rem]">
                    Links Rápidos
                  </h4>
                  <ul className="mt-3 space-y-3 text-[1rem] font-medium leading-tight sm:mt-4 sm:text-[1.08rem] lg:space-y-4 lg:text-[1.45rem]">
                    {siteContent.navigation.slice(0, 4).map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="hover:opacity-75">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex min-w-0 h-full w-full flex-col lg:min-h-[210px]">
                  <h4 className="text-[1.12rem] font-bold uppercase leading-none text-[#f3f7fb] sm:text-[1.25rem] lg:text-[1.55rem]">
                    Contato
                  </h4>
                  <ul className="mt-3 space-y-3 text-[1rem] font-medium leading-tight sm:mt-4 sm:text-[1.08rem] lg:space-y-4 lg:text-[1.45rem] [overflow-wrap:anywhere]">
                    <li>{siteContent.company.city}</li>
                    <li>{siteContent.company.phone}</li>
                    <li>{siteContent.company.email}</li>
                  </ul>
                </div>

                <div className="flex min-w-0 h-full w-full flex-col sm:col-span-2 lg:min-h-[210px] lg:col-span-1">
                  <h4 className="text-[1.12rem] font-bold uppercase leading-none text-[#f3f7fb] sm:text-[1.25rem] lg:text-[1.55rem]">
                    Horário
                  </h4>
                  <ul className="mt-3 space-y-3 text-[1rem] font-medium leading-tight sm:mt-4 sm:text-[1.08rem] lg:space-y-4 lg:text-[1.45rem]">
                    <li>Segunda à Sexta</li>
                    <li>8h às 18h</li>
                    <li>Sábado</li>
                    <li>8h às 12h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pt-8 sm:pt-6 lg:-mt-6 lg:grid-cols-[minmax(0,290px)_minmax(0,0.95fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:items-baseline lg:gap-x-10 lg:pt-0 xl:-mt-8 xl:grid-cols-[minmax(0,320px)_minmax(0,0.95fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] xl:gap-x-16 2xl:gap-x-20">
            <div className="hidden lg:block" />
            <p className="min-w-0 text-[0.98rem] leading-[1.45] font-light text-[#d6e1ea] [overflow-wrap:anywhere] sm:text-[1.08rem] lg:col-span-2 lg:justify-self-center lg:text-center lg:text-[1.2rem] lg:leading-none">
              Conectando os melhores fabricantes de materiais elétricos às empresas
              que constroem o Brasil.
            </p>
            <p className="min-w-0 text-[1.28rem] font-bold leading-[1.05] text-[#f3f7fb] sm:text-[1.5rem] lg:justify-self-start lg:text-[1.9rem]">
              Deus é fiel e justo!
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
