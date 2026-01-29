import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface";
import { CheckCircle, Plus } from "lucide-react";

interface AnalysisGridCardProps {
    item: ChartDataAnalysis;
    addedCards: Set<string>;
    handleAddCard: (analysis: any) => void;
}

const typeIcons: Record<string, string> = {
    bar: '📊',
    line: '📈',
    pie: '🥧',
    scatter: '🔵',
};

export const AnalysisGridCard = ({ item, addedCards, handleAddCard }: AnalysisGridCardProps) => {
    const isAdded = item.id ? addedCards.has(item.id) : false;

    return (
        <div
            className={`group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md ${isAdded ? 'ring-2 ring-accent' : ''
                }`}
        >
            {/* Type Badge */}
            <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">{typeIcons[item.chart_type] || '📊'}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground capitalize">
                    {item.chart_type}
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
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
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

            {/* Preview subtle indicator */}
            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">👁</span>
                </div>
            </div>
        </div>
    )
}