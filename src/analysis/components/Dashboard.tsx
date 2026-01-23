import React from "react"

import { Trash2, Plus } from 'lucide-react';
import TrendChart from "@/components/charts/TrendChart";
import DistributionChart from "@/components/charts/DistributionChart";
import ComparisonChart from "@/components/charts/ComparisonChart";
import PerformanceChart from "@/components/charts/PerformanceCchart";

interface AnalysisResult {
  id: string;
  title: string;
  description: string;
  type: 'trend' | 'distribution' | 'comparison' | 'performance';
  data?: any;
}

interface DashboardProps {
  cards: AnalysisResult[];
  onRemoveCard: (id: string) => void;
  onAddMore: () => void;
}

const chartComponents: Record<string, React.ComponentType<any>> = {
  trend: TrendChart,
  distribution: DistributionChart,
  comparison: ComparisonChart,
  performance: PerformanceChart,
};

export function Dashboard({ cards, onRemoveCard, onAddMore }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-balance text-3xl font-bold text-foreground">
            Tu Dashboard
          </h2>
          <p className="mt-2 text-muted-foreground">
            {cards.length} visualización{cards.length !== 1 ? 'es' : ''} activa{cards.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={onAddMore}
          className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-6 py-2 font-medium text-accent-foreground transition-all hover:bg-accent/90 active:scale-95"
        >
          <Plus className="h-4 w-4" />
          Agregar Gráfico
        </button>
      </div>

      {/* Empty State */}
      {cards.length === 0 ? (
        <div className="flex min-h-96 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 gap-4">
          <div className="text-4xl">📊</div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">
              No hay gráficos agregados
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Añade análisis para comenzar a construir tu dashboard
            </p>
          </div>
          <button
            onClick={onAddMore}
            className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
          >
            Agregar Primer Gráfico
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map(card => {
            const ChartComponent = chartComponents[card.type];
            
            return (
              <div
                key={card.id}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveCard(card.id)}
                    className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Chart Container */}
                <div className="mt-6 rounded-lg bg-background p-4">
                  {ChartComponent && card.data ? (
                    <ChartComponent data={card.data} />
                  ) : (
                    <div className="flex h-64 items-center justify-center text-muted-foreground">
                      Cargando gráfico...
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="capitalize">{card.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
