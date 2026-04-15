import { useState } from "react";
import { RefreshCw, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import HelpTooltip from "./HelpTooltip";
import DraggableCard from "./DraggableCard";
import LogTable from "./LogTable";

export default function CollectionCard() {
  const [pairs, setPairs] = useState("BTCUSDT, ETHUSDT, SOLUSDT");
  const [topN, setTopN] = useState("5");
  const [timeframe, setTimeframe] = useState("1h");
  const [period, setPeriod] = useState("7d");
  const [priority, setPriority] = useState("high");
  const [isLoading, setIsLoading] = useState(false);

  const handleStartCollection = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Collection Card */}
      <DraggableCard defaultWidth={600} defaultHeight={500}>
        <div className="rounded-lg border border-border/50 bg-card/50 p-6 h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 pb-4 border-b border-border/30">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  Coleta de Dados
                </h3>
                <HelpTooltip
                  label="Coleta de Dados"
                  helpText="Solicite novas coletas para o manager. Esta área abre requests operacionais sem expor lotes ou detalhes internos da execução."
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Configure os parâmetros para iniciar uma nova coleta de dados
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="px-3 py-2 rounded-lg border border-border/50 bg-muted/50 hover:bg-muted transition-colors text-sm font-medium text-foreground disabled:opacity-50 flex-shrink-0"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin inline mr-2" />
              ) : (
                "Refresh"
              )}
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 space-y-6 overflow-y-auto">
            {/* Section Label */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Solicitação
              </p>

              {/* Pares */}
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-2">
                  <label className="block text-sm font-medium text-foreground">
                    Pares
                  </label>
                  <HelpTooltip
                    label="Pares"
                    helpText="Insira os pares de criptomoedas que deseja analisar, separados por vírgula. Exemplos: BTCUSDT, ETHUSDT, SOLUSDT."
                  />
                </div>
                <input
                  type="text"
                  value={pairs}
                  onChange={(e) => setPairs(e.target.value)}
                  placeholder="Ex: BTCUSDT, ETHUSDT, SOLUSDT"
                  className="w-full bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                />
              </div>

              {/* Grid: Top N e Timeframe */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <label className="block text-sm font-medium text-foreground">
                      Top N
                    </label>
                    <HelpTooltip
                      label="Top N"
                      helpText="Número de pares mais relevantes a serem incluídos na análise. Quanto maior, mais pares serão analisados."
                    />
                  </div>
                  <input
                    type="text"
                    value={topN}
                    onChange={(e) => setTopN(e.target.value)}
                    placeholder="Ex: 5"
                    className="w-full bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <label className="block text-sm font-medium text-foreground">
                      Timeframe
                    </label>
                    <HelpTooltip
                      label="Timeframe"
                      helpText="Intervalo de tempo para análise (1m = 1 minuto até 1d = 1 dia). Escolher timeframes menores para análises mais detalhadas."
                    />
                  </div>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  >
                    <option value="1m">1m</option>
                    <option value="5m">5m</option>
                    <option value="15m">15m</option>
                    <option value="1h">1h</option>
                    <option value="4h">4h</option>
                    <option value="1d">1d</option>
                  </select>
                </div>
              </div>

              {/* Grid: Período e Prioridade */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <label className="block text-sm font-medium text-foreground">
                      Período
                    </label>
                    <HelpTooltip
                      label="Período"
                      helpText="Intervalo de data para coleta de dados históricos. Períodos maiores permitem análise de tendências de longo prazo."
                    />
                  </div>
                  <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  >
                    <option value="1d">Último dia</option>
                    <option value="7d">Últimos 7 dias</option>
                    <option value="30d">Últimos 30 dias</option>
                    <option value="90d">Últimos 90 dias</option>
                    <option value="1y">Último ano</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <label className="block text-sm font-medium text-foreground">
                      Prioridade
                    </label>
                    <HelpTooltip
                      label="Prioridade"
                      helpText="Nível de urgência da coleta. Prioridade Crítica processa mais rapidamente que Baixa."
                    />
                  </div>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                    <option value="critical">Crítica</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border/30 mt-4">
            <button
              onClick={handleStartCollection}
              disabled={isLoading}
              className={cn(
                "flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2",
                "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              Iniciar coleta
            </button>
            <button
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg font-medium border border-border/50 bg-muted/50 text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Atualizar massa existente
            </button>
          </div>
        </div>
      </DraggableCard>

      {/* Log Table */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold text-foreground">Histórico de Operações</h3>
          <HelpTooltip
            label="Histórico de Operações"
            helpText="Tabela com registro de todas as coletas, tarefas e lotes executados. Consulte aqui o status de cada operação."
          />
        </div>
        <LogTable />
      </div>
    </div>
  );
}
