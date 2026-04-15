import { useState } from "react";
import { AlertCircle, CheckCircle, Clock, ArrowUpDown, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogEntry {
  id: string;
  bot: string;
  tarefa: string;
  lote: string;
  status: "sucesso" | "pendente" | "erro";
  prioridade: "baixa" | "media" | "alta" | "critica";
  timestamp: Date;
}

interface LogTableProps {
  data?: LogEntry[];
}

type SortField = "bot" | "tarefa" | "lote" | "status" | "prioridade" | "timestamp";
type SortOrder = "asc" | "desc";

export default function LogTable({ data = defaultLogs }: LogTableProps) {
  const [sortField, setSortField] = useState<SortField>("timestamp");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [logs, setLogs] = useState(data);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleRefresh = () => {
    // Simular refresh
    setLogs([...logs]);
  };

  const sortedLogs = [...logs].sort((a, b) => {
    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    if (sortField === "timestamp") {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    if (typeof aValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sucesso":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "erro":
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      case "pendente":
      default:
        return <Clock className="w-4 h-4 text-amber-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sucesso":
        return "bg-green-500/10 text-green-400";
      case "erro":
        return "bg-red-500/10 text-red-400";
      case "pendente":
      default:
        return "bg-amber-500/10 text-amber-400";
    }
  };

  const getPriorityColor = (prioridade: string) => {
    switch (prioridade) {
      case "critica":
        return "bg-red-500/10 text-red-400";
      case "alta":
        return "bg-orange-500/10 text-orange-400";
      case "media":
        return "bg-amber-500/10 text-amber-400";
      case "baixa":
      default:
        return "bg-green-500/10 text-green-400";
    }
  };

  const SortHeader = ({ field, label }: { field: SortField; label: string }) => (
    <th
      className="px-6 py-3 text-left font-semibold text-foreground cursor-pointer hover:bg-muted/30 transition-colors"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {sortField === field && (
          <ArrowUpDown className={cn("w-4 h-4 text-primary", sortOrder === "desc" && "rotate-180")} />
        )}
      </div>
    </th>
  );

  return (
    <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="px-6 py-4 border-b border-border/50 bg-card/50 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Total: <span className="font-semibold text-foreground">{sortedLogs.length}</span> operações
        </p>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm font-medium text-foreground"
          title="Atualizar tabela"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <SortHeader field="bot" label="Bot" />
              <SortHeader field="tarefa" label="Tarefa" />
              <SortHeader field="lote" label="Lote" />
              <SortHeader field="status" label="Status" />
              <th className="px-6 py-3 text-left font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <span>Prioridade</span>
                </div>
              </th>
              <SortHeader field="timestamp" label="Tempo" />
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sortedLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                  Nenhum log disponível. As operações aparecerão aqui.
                </td>
              </tr>
            ) : (
              sortedLogs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-6 py-3">
                    <span className="text-foreground font-medium">{log.bot}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-muted-foreground">{log.tarefa}</span>
                  </td>
                  <td className="px-6 py-3">
                    <code className="bg-muted/50 px-2 py-1 rounded text-xs text-primary">
                      {log.lote}
                    </code>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(log.status)}
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(log.status)}`}>
                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <select
                      value={log.prioridade}
                      onChange={() => {}}
                      className={`px-2 py-1 rounded text-xs font-medium border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/50 ${getPriorityColor(log.prioridade)}`}
                      title="Selecione a prioridade"
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                      <option value="critica">Crítica</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 text-xs text-muted-foreground">
                    {log.timestamp.toLocaleTimeString("pt-BR")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const defaultLogs: LogEntry[] = [
  {
    id: "1",
    bot: "BotTrade-01",
    tarefa: "Análise Técnica",
    lote: "BATCH-2024-001",
    status: "sucesso",
    prioridade: "alta",
    timestamp: new Date(Date.now() - 5 * 60000),
  },
  {
    id: "2",
    bot: "BotTrade-02",
    tarefa: "Coleta de Dados",
    lote: "BATCH-2024-002",
    status: "sucesso",
    prioridade: "media",
    timestamp: new Date(Date.now() - 15 * 60000),
  },
  {
    id: "3",
    bot: "BotTrade-03",
    tarefa: "Processamento",
    lote: "BATCH-2024-003",
    status: "pendente",
    prioridade: "critica",
    timestamp: new Date(Date.now() - 30 * 60000),
  },
  {
    id: "4",
    bot: "BotTrade-04",
    tarefa: "Validação",
    lote: "BATCH-2024-004",
    status: "erro",
    prioridade: "alta",
    timestamp: new Date(Date.now() - 45 * 60000),
  },
  {
    id: "5",
    bot: "BotTrade-01",
    tarefa: "Relatório",
    lote: "BATCH-2024-005",
    status: "sucesso",
    prioridade: "baixa",
    timestamp: new Date(Date.now() - 60 * 60000),
  },
];
