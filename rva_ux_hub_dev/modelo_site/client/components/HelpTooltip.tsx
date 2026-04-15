import { useState } from "react";
import { HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HelpTooltipProps {
  label: string;
  helpText?: string;
}

export default function HelpTooltip({ label, helpText }: HelpTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultText = `${label} - Clique para obter ajuda sobre este campo.`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors ml-1.5 flex-shrink-0"
        title={`Ajuda: ${label}`}
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-card border border-border/50 rounded-lg max-w-md w-full mx-4 p-6 shadow-2xl animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{label}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="text-sm text-muted-foreground leading-relaxed mb-6">
              {helpText || defaultText}
            </div>

            {/* Footer */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
