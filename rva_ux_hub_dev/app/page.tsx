import { Shell } from "@/components/shell";

const routes = [
  {
    name: "RVA Consultant",
    description: "Interacao geral do ecossistema RVA.",
    tone: "bg-[var(--accent-soft)] border-white/15",
  },
  {
    name: "RVA Trade",
    description: "Fluxos do trade engine, auditoria e saneamento.",
    tone: "bg-[var(--trade)] border-[var(--trade-border)]",
  },
  {
    name: "RVA Finance",
    description: "Espaco reservado para experiencia financeira especializada.",
    tone: "bg-[var(--finance)] border-[var(--finance-border)]",
  },
];

export default function ConsultantPage() {
  return (
    <Shell>
      <section className="rounded-[32px] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_28px_80px_rgba(3,8,20,0.45)] md:p-8">
        <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(0,1.7fr)_360px] xl:items-start">
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--muted)]">
              RVA Consultant
            </div>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
              Area principal de interacao do RVA
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--muted)]">
              Esta pagina sera o ponto central de conversa, selecao de trilha e
              roteamento futuro para o orquestrador e para os modulos
              especialistas.
            </p>
          </div>

          <div className="w-full rounded-[26px] border border-white/12 bg-white/5 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
              Trilha pretendida
            </div>
            <button className="mt-3 flex w-full items-center justify-between rounded-2xl border border-white/20 bg-[var(--panel-strong)] px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
              <span>Selecionar modulo ou trilha</span>
              <span className="text-[var(--muted)]">▼</span>
            </button>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A lista vira do registry oficial de roteamento. O help aparecera
              aqui como funcao contextual da interface principal.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_360px]">
          <div className="rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(15,30,54,0.76)_0%,rgba(9,18,34,0.92)_100%)] p-6">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
              Interacao
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              Canal principal de conversa
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              Nesta fase, a area abaixo funciona como placeholder visual do chat.
              Depois ela sera conectada ao roteador, ao orquestrador e aos
              modulos especializados.
            </p>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-white/4 p-5">
              <div className="min-h-[280px] rounded-[22px] border border-white/12 bg-[rgba(6,15,28,0.55)] p-6 text-sm leading-7 text-[var(--muted)] md:min-h-[340px]">
                Digite ou fale sua necessidade aqui. O sistema vai direcionar a
                conversa para a trilha mais adequada quando o roteamento estiver
                ativo.
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <input
                  className="flex-1 rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                  placeholder="Mensagem principal do RVA..."
                  readOnly
                />
                <button className="rounded-2xl border border-white/10 bg-[var(--accent)] px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(46,107,255,0.28)]">
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-dashed border-white/12 bg-white/4 p-5 text-sm leading-7 text-[var(--muted)]">
              <div className="font-semibold text-[var(--foreground)]">Help</div>
              <div className="mt-2">
                Aqui vamos explicar a manutencao do roteamento, mostrar o caminho
                do arquivo oficial e orientar a inclusao de novas trilhas.
              </div>
            </div>
            {routes.map((route) => (
              <div key={route.name} className={`rounded-[24px] border p-5 ${route.tone}`}>
                <div className="text-sm font-semibold text-[var(--foreground)]">
                  {route.name}
                </div>
                <div className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {route.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
