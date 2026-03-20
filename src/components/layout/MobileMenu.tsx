"use client";

import { useEffect, useId, useState } from "react";
import { Container } from "./Container";

type MobileMenuItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: MobileMenuItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white/90 text-[var(--color-primary)] shadow-[0_10px_28px_rgba(4,50,66,0.08)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
        <span className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-[7px] rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-0 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 translate-y-[5px] rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-0 rotate-[-45deg]" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 z-40 bg-[rgba(4,50,66,0.16)] backdrop-blur-[2px] md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div
            id={menuId}
            className="absolute inset-x-0 top-full z-50 border-b border-[var(--color-border)] bg-white/95 shadow-[0_18px_40px_rgba(4,50,66,0.14)] backdrop-blur"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-[1rem] font-medium uppercase tracking-[0.06em] text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Container>
          </div>
        </>
      ) : null}
    </>
  );
}
