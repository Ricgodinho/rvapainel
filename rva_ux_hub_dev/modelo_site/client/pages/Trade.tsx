import Layout from "@/components/Layout";
import CollectionCard from "@/components/CollectionCard";
import HelpTooltip from "@/components/HelpTooltip";
import {
  TrendingUp,
  BarChart3,
  Wallet,
  AlertCircle,
  PieChart,
} from "lucide-react";

export default function Trade() {
  const features = [
    {
      icon: TrendingUp,
      title: "Análise de Mercado",
      description:
        "Acesse análises em tempo real do mercado. Receba insights sobre tendências, oportunidades e movimentos de preços.",
      helpText: "Recurso para análise completa do mercado de criptomoedas em tempo real, incluindo tendências, padrões e oportunidades de trading.",
    },
    {
      icon: Wallet,
      title: "Gestão de Portfolio",
      description:
        "Acompanhe seus investimentos e operações. Monitore rentabilidade, riscos e rebalanceamento de posições.",
      helpText: "Ferramentas para acompanhar e gerenciar seu portfólio de investimentos, monitorar rentabilidade e otimizar alocação.",
    },
    {
      icon: BarChart3,
      title: "Indicadores Técnicos",
      description:
        "Analise padrões técnicos e indicadores. Identifique sinais de compra e venda através de análise técnica avançada.",
      helpText: "Acesso a indicadores técnicos avançados para análise de gráficos e identificação de sinais de trading.",
    },
    {
      icon: PieChart,
      title: "Alocação de Ativos",
      description:
        "Optimize a distribuição de seus ativos. Receba recomendações de alocação baseadas em seu perfil de risco.",
      helpText: "Recomendações de alocação otimizadas de ativos baseadas em seu perfil de risco e objetivos financeiros.",
    },
  ];

  const strategies = [
    {
      name: "Day Trading",
      description: "Operações no curto prazo com alta frequência",
      risk: "Muito Alto",
      riskColor: "text-red-600",
    },
    {
      name: "Swing Trading",
      description: "Operações de médio prazo aproveitando oscilações",
      risk: "Alto",
      riskColor: "text-orange-600",
    },
    {
      name: "Investimento de Longo Prazo",
      description: "Construção de posições duradouras com focus em crescimento",
      risk: "Moderado",
      riskColor: "text-yellow-600",
    },
    {
      name: "Cobertura (Hedging)",
      description: "Proteção de posições existentes contra perdas",
      risk: "Baixo",
      riskColor: "text-green-600",
    },
  ];

  return (
    <Layout>
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-cyan-500/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="rounded-xl bg-cyan-500/20 p-3">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Guia Trade
                </h1>
                <p className="text-muted-foreground mt-1">
                  Módulo especializado em operações e análises de mercado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Description */}
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              O módulo Trade oferece ferramentas especializadas para análise de
              mercado, gestão de investimentos e operações de trading. Utilize
              esta guia para explorar estratégias, analisar ativos e otimizar
              suas operações financeiras.
            </p>

            {/* Warning Box */}
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-400 text-sm">
                  Aviso de Risco
                </p>
                <p className="text-sm text-amber-300/80 mt-1">
                  Operações de trading envolvem risco substancial de perda. Estude
                  cuidadosamente antes de realizar operações. Não considere este
                  sistema como recomendação de investimento.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Recursos Principais
              </h2>
              <HelpTooltip
                label="Recursos Principais"
                helpText="Estes são os principais recursos disponíveis no módulo Trade. Cada um oferece funcionalidades especializadas para análise e operações de trading."
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature: any) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-lg border border-border/50 bg-card/50 p-6 hover:border-border/80 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-cyan-500/20 p-3 text-cyan-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {feature.title}
                          </h3>
                          <HelpTooltip
                            label={feature.title}
                            helpText={feature.helpText}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Collection Card */}
            <CollectionCard />
          </div>

          {/* Strategies */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Estratégias de Trading
              </h2>
              <HelpTooltip
                label="Estratégias de Trading"
                helpText="Diferentes estratégias de trading com variados níveis de risco e retorno. Escolha a que melhor se adequa ao seu perfil e objetivos."
              />
            </div>
            <div className="space-y-4">
              {strategies.map((strategy) => (
                <div
                  key={strategy.name}
                  className="rounded-lg border border-border/50 bg-card/50 p-6 hover:border-border/80 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">
                      {strategy.name}
                    </h3>
                    <span className={`text-sm font-medium ${strategy.riskColor}`}>
                      Risco: {strategy.risk}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Painel de Análise
              </h2>
              <HelpTooltip
                label="Painel de Análise"
                helpText="Visualização centralizada com gráficos, indicadores técnicos e análises em tempo real para tomadas de decisão rápidas."
              />
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <div className="bg-muted rounded-lg p-6 text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground mb-4">
                  O painel de análise de trading será exibido aqui
                </p>
                <p className="text-sm text-muted-foreground">
                  Gráficos, indicadores e análises em tempo real
                </p>
              </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Conceitos Fundamentais
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Análise Técnica:</strong>{" "}
                    Estudo de padrões e tendências de preço
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Análise Fundamental:</strong>{" "}
                    Avaliação de fatores econômicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Gestão de Risco:</strong>{" "}
                    Limitação de perdas através de stop-loss
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Diversificação:</strong>{" "}
                    Distribuição entre diferentes ativos
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Boas Práticas
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Defina sempre um plano de risco antes de operar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Use stop-loss para proteger suas posições</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>
                    Mantenha emoções sob controle durante operações
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Estude continuamente novos padrões e estratégias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
