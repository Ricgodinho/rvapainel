import Layout from "@/components/Layout";
import HelpTooltip from "@/components/HelpTooltip";
import { HelpCircle, FileText, Navigation, Settings } from "lucide-react";

export default function Help() {
  const sections = [
    {
      icon: Navigation,
      title: "Navegação",
      items: [
        "Use a barra lateral para acessar diferentes guias",
        "Clique nos cards do dashboard para ir diretamente a uma guia",
        "Use o menu móvel (hamburger) em dispositivos menores",
        "Todas as guias ativas aparecem na navegação principal",
      ],
    },
    {
      icon: FileText,
      title: "Documentação",
      items: [
        "Cada guia possui documentação específica de sua funcionalidade",
        "Recursos são organizados por tema dentro de cada guia",
        "Exemplos práticos ajudam a entender melhor cada recurso",
        "Consulte as dicas úteis para otimizar o uso de cada módulo",
      ],
    },
    {
      icon: Settings,
      title: "Configuração",
      items: [
        "As configurações são personalizadas por usuário",
        "Preferências são salvas automaticamente",
        "Você pode resetar as configurações a qualquer momento",
        "Dados históricos são mantidos separadamente das configurações",
      ],
    },
  ];

  const faqs = [
    {
      question: "Como navego entre as diferentes guias?",
      answer:
        "Você pode usar a barra lateral esquerda para acessar as guias disponíveis. Também pode clicar nos cards no dashboard principal para ir diretamente a uma guia.",
    },
    {
      question: "Quais guias estão ativas atualmente?",
      answer:
        "No momento, as guias ativas são: Geral (para acesso conversacional) e Trade (para análises e operações de trading). Financeiro, Programming e Marketing estão em desenvolvimento.",
    },
    {
      question: "Posso usar a versão mobile do RVA Hub?",
      answer:
        "Sim! O RVA Hub é totalmente responsivo. Em dispositivos menores, a barra lateral se transforma em um menu mobile. Clique no ícone de menu (hamburger) no canto superior esquerdo.",
    },
    {
      question:
        "Como funciona o roteamento de guias especializadas?",
      answer:
        "Cada guia representa uma rota especializada. Seleção é manual através da navegação ou dashboard. No futuro, o sistema pode automatizar o roteamento com base no aprendizado.",
    },
    {
      question: "Como mantenho meu histórico de operações?",
      answer:
        "Seu histórico é salvo automaticamente. Você pode revisar consultas anteriores, operações executadas e análises realizadas através de cada guia.",
    },
    {
      question: "Posso solicitar novas guias ou funcionalidades?",
      answer:
        "Sim! O sistema foi projetado para crescimento futuro. Futuras guias serão adicionadas conforme forem officialized em contrato e documentação.",
    },
  ];

  const growth = [
    {
      title: "Fase de Bootstrap (Atual)",
      status: "Ativa",
      description: "Guias Geral e Trade estabelecidas e funcionando",
    },
    {
      title: "Fase de Expansão",
      status: "Planejada",
      description: "Adicionar Financeiro, Programming e Marketing",
    },
    {
      title: "Fase de Otimização",
      status: "Futura",
      description: "Roteamento automático e seleção avançada de modelos",
    },
  ];

  return (
    <Layout>
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-blue-500/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="rounded-xl bg-blue-500/20 p-3">
                <HelpCircle className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Ajuda & Documentação
                </h1>
                <p className="text-muted-foreground mt-1">
                  Tudo que você precisa saber sobre o RVA Hub
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Help Sections */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Seções de Ajuda
              </h2>
              <HelpTooltip
                label="Seções de Ajuda"
                helpText="Diferentes seções de documentação para ajudá-lo a navegar e usar todas as funcionalidades do RVA Hub."
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="rounded-lg border border-border/50 bg-card/50 p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Plano de Crescimento
              </h2>
              <HelpTooltip
                label="Plano de Crescimento"
                helpText="Roadmap de desenvolvimento do RVA Hub mostrando as fases de implementação e futuras funcionalidades."
              />
            </div>
            <div className="space-y-4">
              {growth.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-lg border border-border/50 bg-card/50 p-6 flex items-start justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${
                      phase.status === "Ativa"
                        ? "bg-green-500/20 text-green-400"
                        : phase.status === "Planejada"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {phase.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
              <HelpTooltip
                label="Perguntas Frequentes"
                helpText="Respostas para as perguntas mais comuns sobre o uso do RVA Hub e suas funcionalidades."
              />
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="rounded-lg border border-border/50 bg-card/50 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <summary className="flex items-center justify-between p-6 font-semibold text-foreground list-none hover:bg-muted/50 transition-colors">
                    <span className="text-left">{faq.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-border text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
