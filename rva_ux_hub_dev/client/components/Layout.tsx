import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HelpCircle, BookOpen, TrendingUp, Menu, X, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: Sparkles,
    },
    {
      label: "Geral",
      href: "/geral",
      icon: BookOpen,
    },
    {
      label: "Trade",
      href: "/trade",
      icon: TrendingUp,
    },
    {
      label: "Ajuda",
      href: "/help",
      icon: HelpCircle,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Mock history data
  const interactions = [
    { id: 1, title: "Análise de mercado", time: "Há 2 minutos", guide: "Trade" },
    { id: 2, title: "Dúvida sobre finanças", time: "Há 15 minutos", guide: "Geral" },
    { id: 3, title: "Consulta sobre trends", time: "Há 1 hora", guide: "Trade" },
    { id: 4, title: "Perguntas gerais", time: "Há 2 horas", guide: "Geral" },
    { id: 5, title: "Análise técnica", time: "Ontem", guide: "Trade" },
    { id: 6, title: "Ajuda de navegação", time: "Ontem", guide: "Ajuda" },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">RVA</span>
            </div>
            <span className="hidden sm:inline text-foreground">RVA Hub</span>
          </Link>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap",
                    active
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Sidebar Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
              title={sidebarOpen ? "Fechar histórico" : "Abrir histórico"}
            >
              <Clock className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border px-4 py-3 bg-card/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                      active
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* History Sidebar */}
        <aside
          className={cn(
            "hidden md:flex flex-col w-80 border-r border-border bg-card/30 transition-all duration-300 ease-out",
            !sidebarOpen && "-ml-80"
          )}
        >
          {/* History Header */}
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Histórico</h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Suas interações recentes
            </p>
          </div>

          {/* History List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-3 space-y-2">
              {interactions.map((interaction) => (
                <button
                  key={interaction.id}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {interaction.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">
                      {interaction.time}
                    </span>
                    <span className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary/80 font-medium">
                      {interaction.guide}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Clear History */}
          <div className="p-4 border-t border-border/50">
            <button className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-center">
              Limpar histórico
            </button>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
