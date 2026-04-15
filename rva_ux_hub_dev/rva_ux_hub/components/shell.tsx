"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";

const modules = [
  {
    href: "/",
    title: "RVA Consultant",
    description: "Interacao principal e roteamento manual.",
  },
  {
    href: "/trade",
    title: "RVA Trade",
    description: "Trade engine, massa e operacao.",
  },
  {
    href: "/finance",
    title: "RVA Finance",
    description: "Modulo financeiro especializado.",
  },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const currentTitle = useMemo(() => {
    return modules.find((module) => module.href === pathname)?.title ?? "RVA Consultant";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex min-h-screen gap-4 p-4 md:gap-6 md:p-6">
        <aside
          className={`hidden shrink-0 rounded-[30px] border border-white/10 bg-[var(--panel)] shadow-[0_24px_80px_rgba(3,8,20,0.45)] transition-all duration-300 md:flex md:flex-col ${
            collapsed ? "w-[92px]" : "w-[280px]"
          }`}
        >
          <div className="border-b border-white/10 px-5 py-5">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              RVA UX Hub
            </div>
            {!collapsed ? (
              <>
                <h1 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Shell modular do RVA
                </h1>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Navegacao principal, trilhas especializadas e futura conexao com
                  roteador, orquestrador e modulos.
                </p>
              </>
            ) : null}
          </div>

          <nav className="flex-1 space-y-3 px-4 py-4">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className={`block rounded-2xl border px-4 py-4 transition ${
                  pathname === module.href
                    ? "border-white/40 bg-[var(--panel-strong)] text-[var(--foreground)] shadow-[0_16px_30px_rgba(0,0,0,0.24)]"
                    : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <div className="text-base font-semibold">
                  {module.title}
                </div>
                {!collapsed ? (
                  <div className="mt-1 text-sm leading-6">{module.description}</div>
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 px-4 py-4">
            {!collapsed ? (
              <div className="mb-3 rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-4 text-sm leading-6 text-[var(--muted)]">
                <div className="font-semibold text-[var(--foreground)]">Help</div>
                <div className="mt-2">
                  A funcao de help vai viver na experiencia principal e apontar
                  para o registry oficial de roteamento.
                </div>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setCollapsed((value) => !value)}
              className="w-full rounded-2xl border border-white/15 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10"
            >
              {collapsed ? "Expandir" : "Encapsular menu"}
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between rounded-[24px] border border-white/10 bg-[var(--panel)] px-5 py-4 shadow-[0_18px_40px_rgba(3,8,20,0.35)] md:hidden">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                RVA UX Hub
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                {currentTitle}
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
