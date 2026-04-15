import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HelpTooltip from "@/components/HelpTooltip";
import { ArrowRight, BookOpen, TrendingUp, Zap } from "lucide-react";

export default function Index() {
  const guides = [
    {
      title: "Geral",
      description:
        "Guia principal conversacional para navegação geral do assistente virtual.",
      icon: BookOpen,
      href: "/geral",
      gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
    },
    {
      title: "Trade",
      description:
        "Módulo especializado em operações e análises de trading e investimentos.",
      icon: TrendingUp,
      href: "/trade",
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  const futureGuides = [
    {
      title: "Financeiro",
      status: "Em desenvolvimento",
    },
    {
      title: "Programming",
      status: "Em desenvolvimento",
    },
    {
      title: "Marketing",
      status: "Em desenvolvimento",
    },
  ];

  return (
    <Layout>
      <div className="w-full">
        {/* Hero Section */}
        <div className="border-b border-border/50 bg-gradient-to-b from-card/50 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  RVA UX Hub v1.0
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Bem-vindo ao <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">RVA Hub</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seu assistente virtual pessoal. Explore as guias especializadas
                e acompanhe suas interações no histórico.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Active Guides */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Guias Ativas
              </h2>
              <HelpTooltip
                label="Guias Ativas"
                helpText="Estas são as guias especializadas que estão disponíveis e prontas para uso. Clique em qualquer uma para começar a explorar suas funcionalidades."
              />
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                2 disponíveis
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.href}
                    to={guide.href}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative p-6 sm:p-8">
                      <div className="mb-4 flex items-start justify-between">
                        <div className={`rounded-xl p-3 ${guide.bgColor}`}>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {guide.description}
                      </p>

                      {/* Status badge */}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          ✓ Ativa
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Future Guides */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Em Desenvolvimento
              </h2>
              <HelpTooltip
                label="Em Desenvolvimento"
                helpText="Estas guias estão em desenvolvimento e serão lançadas em breve. Acompanhe as atualizações para quando ficarem disponíveis!"
              />
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400">
                3 futuras
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {futureGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="rounded-lg border border-dashed border-border/50 bg-card/30 p-6 hover:border-border transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {guide.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <p className="text-sm text-muted-foreground">Guias ativas</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="text-2xl font-bold text-secondary mb-1">6</div>
              <p className="text-sm text-muted-foreground">Interações recentes</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <p className="text-sm text-muted-foreground">Guias planejadas</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
