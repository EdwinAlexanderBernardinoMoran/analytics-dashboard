import type { ChartDataContext } from "@/analysis/interfaces/analysis.interface";
import { Trash2 } from "lucide-react";

interface DashboardCardProps {
    chart: ChartDataContext;
    ChartComponent: React.ComponentType<any>;
    onRemoveCard: (id: string) => void;
}

export const DashboardCard = ({ chart, ChartComponent, onRemoveCard }: DashboardCardProps) => {

    return (
        <div
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
        >
            {/* Card Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                        {chart.title}
                    </h3>
                    {/* <p className="mt-1 text-sm text-muted-foreground">
                        {card.description}
                    </p> */}
                </div>
                <button
                    onClick={() => onRemoveCard(chart.title)}
                    className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-destructive"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>

            {/* Chart Container */}
            <div className="mt-6 rounded-lg bg-background p-4">
                {ChartComponent && chart.datasets ? (
                    <ChartComponent
                        chart_type={chart.chart_type}
                        datasets={chart.datasets}
                        title={chart.title}
                    />
                ) : (
                    <div className="flex h-64 items-center justify-center text-muted-foreground">
                        Cargando gráfico...
                    </div>
                )}
            </div>

            {/* Card Footer */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span className="capitalize">{chart.chart_type}</span>
            </div>
        </div>
    )
}