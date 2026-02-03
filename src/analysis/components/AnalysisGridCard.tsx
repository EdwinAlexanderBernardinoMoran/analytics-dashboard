import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface.interface";
import { BarChart3, CheckCircle, Eye, PieChart, Plus, ScatterChart, TrendingUp } from "lucide-react";

interface AnalysisGridCardProps {
    item: ChartDataAnalysis;
    addedCards: Set<string>;
    handleAddCard: (analysis: any) => void;
}

const chartConfig = {
    bar: {
        icon: BarChart3,
        label: "Bar",
        bgClass: "bg-badge-bar-bg",
        textClass: "text-badge-bar",
    },
    line: {
        icon: TrendingUp,
        label: "Line",
        bgClass: "bg-badge-line-bg",
        textClass: "text-badge-line",
    },
    pie: {
        icon: PieChart,
        label: "Pie",
        bgClass: "bg-badge-pie-bg",
        textClass: "text-badge-pie",
    },
    scatter: {
        icon: ScatterChart,
        label: "Scatter",
        bgClass: "bg-badge-scatter-bg",
        textClass: "text-badge-scatter",
    },
};

export const AnalysisGridCard = ({ item, addedCards, handleAddCard }: AnalysisGridCardProps) => {
    const isAdded = item.id ? addedCards.has(item.id) : false;
    const config = chartConfig[item.chart_type];
    const Icon = config.icon;

    return (
        <div
            className={`group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md ${isAdded ? 'ring-2 ring-gray-300' : ''
                }`}
        >
            {/* Type Badge */}
            <div className="mb-4 flex items-center gap-2">
                <div className={`p-2 rounded-lg ${config.bgClass}`}>
                    <Icon className={`w-5 h-5 ${config.textClass}`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.bgClass} ${config.textClass}`}>
                    {config.label}
                </span>
            </div>

            {/* Content */}
            <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
            </h3>
            <p className="mb-6 min-h-12 text-sm text-muted-foreground">
                {item.insight}
            </p>

            {/* Button Group */}
            <div className="flex gap-2">
                <button
                    onClick={() => handleAddCard(item)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all ${isAdded
                        ? 'bg-secondary/35 text-badge-bar cursor-not-allowed'
                        : 'bg-secondary text-badge-bar hover:bg-secondary/90'
                        } active:scale-95`}
                    disabled={isAdded}
                >
                    {isAdded ? (
                        <>
                            <CheckCircle className="h-4 w-4" />
                            Agregado
                        </>
                    ) : (
                        <>
                            <Plus className="h-4 w-4" />
                            Agregar
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}