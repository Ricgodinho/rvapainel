import { Shell } from "@/components/shell";

export default function TradePage() {
  return (
    <Shell>
      <section className="rounded-[32px] border border-[var(--trade-border)] bg-[linear-gradient(180deg,rgba(12,28,51,0.9)_0%,rgba(7,17,31,0.96)_100%)] p-6 shadow-[0_28px_80px_rgba(3,8,20,0.45)] md:p-8">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
          Modulo especializado
        </div>
        <h2 className="mt-3 text-4xl font-semibold text-[var(--foreground)]">
          RVA Trade
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Esta guia nasce como estrutura visual inicial do trade engine. Aqui
          entrarao cards operacionais, status de massa, auditoria, saneamento e
          futuras acoes do modulo.
        </p>

        <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
          <div className="rounded-[28px] border border-[var(--trade-border)] bg-[rgba(10,22,40,0.78)] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-lg font-semibold text-[var(--foreground)]">
                  Coleta
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  Solicite novas coletas para o manager. Esta area abre requests
                  operacionais sem expor lotes ou detalhes internos da
                  execucao.
                </p>
              </div>

              <button className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10">
                Refresh
              </button>
            </div>

            <div className="mt-6">
              <div className="rounded-[24px] border border-white/10 bg-[rgba(6,15,28,0.55)] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Solicitacao
                </div>
                <div className="mt-4 space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      Pares
                    </span>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                      placeholder="BTCUSDT, ETHUSDT, SOLUSDT"
                    />
                  </label>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Top N
                      </span>
                      <input
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                        placeholder="Ex.: 5"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Timeframe
                      </span>
                      <select className="mt-2 w-full rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none">
                        <option>1h</option>
                        <option>4h</option>
                        <option>1d</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Periodo
                      </span>
                      <select className="mt-2 w-full rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none">
                        <option>Ultimos 7 dias</option>
                        <option>Ultimos 30 dias</option>
                        <option>Ultimos 90 dias</option>
                        <option>Todo o historico</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Prioridade
                      </span>
                      <select className="mt-2 w-full rounded-2xl border border-white/15 bg-[var(--panel-strong)] px-4 py-3 text-[var(--foreground)] outline-none">
                        <option>Alta</option>
                        <option>Normal</option>
                        <option>Baixa</option>
                      </select>
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-2xl border border-white/10 bg-[var(--accent)] px-5 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(46,107,255,0.28)]">
                      Iniciar coleta
                    </button>
                    <button className="rounded-2xl border border-white/15 bg-white/6 px-5 py-3 font-medium text-[var(--foreground)] transition hover:bg-white/10">
                      Atualizar massa existente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[24px] border border-[var(--trade-border)] bg-[rgba(10,22,40,0.76)] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-[var(--foreground)]">
                    Auditoria
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Saude da massa, gaps, consistencia e reauditoria.
                  </p>
                </div>
                <button className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10">
                  Refresh
                </button>
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--trade-border)] bg-[rgba(10,22,40,0.76)] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-[var(--foreground)]">
                    Saneamento
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Area preparada para os fluxos de reparo governado.
                  </p>
                </div>
                <button className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10">
                  Refresh
                </button>
              </div>
            </div>
            <div className="rounded-[24px] border border-dashed border-white/12 bg-white/4 p-5 text-sm leading-7 text-[var(--muted)]">
              Esta coluna lateral fica livre para status leve, atalhos e
              orientacoes sem bloquear a operacao principal da coleta.
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/12 bg-[rgba(8,18,34,0.78)] p-5 shadow-[0_22px_50px_rgba(3,8,20,0.35)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                Acompanhamento operacional
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                Solicitacoes e execucoes do trade
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                Esta tabela consolida coleta, auditoria, saneamento e features
                sem travar o uso da tela. O cadeado prepara o modo futuro de
                redimensionamento e movimentacao.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-2xl border border-white/15 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10">
                Cadeado fechado
              </button>
              <button className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10">
                Refresh
              </button>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto rounded-[24px] border border-white/10 bg-[rgba(6,15,28,0.55)]">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-white/6 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                <tr>
                  <th className="px-4 py-4 font-semibold">Tipo</th>
                  <th className="px-4 py-4 font-semibold">Par</th>
                  <th className="px-4 py-4 font-semibold">Timeframe</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">Prioridade</th>
                  <th className="px-4 py-4 font-semibold">Lotes</th>
                  <th className="px-4 py-4 font-semibold">Workers</th>
                  <th className="px-4 py-4 font-semibold">Atualizacao</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8 text-sm text-[var(--foreground)]">
                <tr className="bg-white/3">
                  <td className="px-4 py-4">Coleta</td>
                  <td className="px-4 py-4">BTCUSDT</td>
                  <td className="px-4 py-4">1h</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Aguardando solicitacao</td>
                  <td className="px-4 py-4">Alta</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem atualizacao</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="px-4 py-4">Auditoria</td>
                  <td className="px-4 py-4">ETHUSDT</td>
                  <td className="px-4 py-4">1h</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem execucao</td>
                  <td className="px-4 py-4">Normal</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem atualizacao</td>
                </tr>
                <tr className="bg-white/3">
                  <td className="px-4 py-4">Saneamento</td>
                  <td className="px-4 py-4">SOLUSDT</td>
                  <td className="px-4 py-4">1h</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem execucao</td>
                  <td className="px-4 py-4">Normal</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem atualizacao</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="px-4 py-4">Features</td>
                  <td className="px-4 py-4">BNBUSDT</td>
                  <td className="px-4 py-4">1h</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Reservado</td>
                  <td className="px-4 py-4">Baixa</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4 text-[var(--muted)]">Sem atualizacao</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Shell>
  );
}
