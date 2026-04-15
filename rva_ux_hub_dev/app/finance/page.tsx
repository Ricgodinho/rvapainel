import { Shell } from "@/components/shell";

export default function FinancePage() {
  return (
    <Shell>
      <section className="rounded-[32px] border border-[var(--finance-border)] bg-[linear-gradient(180deg,rgba(9,24,43,0.9)_0%,rgba(7,17,31,0.96)_100%)] p-6 shadow-[0_28px_80px_rgba(3,8,20,0.45)] md:p-8">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
          Modulo especializado
        </div>
        <h2 className="mt-3 text-4xl font-semibold text-[var(--foreground)]">
          RVA Finance
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Esta guia fica reservada para a experiencia financeira especializada.
          Nesta fase, ela serve para alinharmos a navegacao e a identidade
          visual do modulo.
        </p>

        <div className="mt-8 rounded-[24px] border border-[var(--finance-border)] bg-[rgba(10,22,40,0.76)] p-5 text-sm leading-7 text-[var(--muted)]">
          As trilhas, widgets e acoes desta area serao definidos quando o
          modulo financeiro oficial entrar em operacao.
        </div>
      </section>
    </Shell>
  );
}
