import { useState } from 'react';
import { Plus, CheckCircle } from 'lucide-react';

interface AnalysisResult {
  id: string;
  title: string;
  description: string;
  type: 'trend' | 'distribution' | 'comparison' | 'performance';
}

interface AnalysisResultsProps {
  analyses: AnalysisResult[];
  onAddToDashboard: (analysis: AnalysisResult) => void;
  onGoToDashboard: () => void;
  dashboardCardsCount: number;
}

const typeIcons: Record<string, string> = {
  trend: '📈',
  distribution: '📊',
  comparison: '⚖️',
  performance: '⚡',
};

export function AnalysisResults({
  analyses,
  onAddToDashboard,
  onGoToDashboard,
  dashboardCardsCount,
}: AnalysisResultsProps) {
  const [addedCards, setAddedCards] = useState<Set<string>>(new Set());

  const handleAddCard = (analysis: AnalysisResult) => {
    onAddToDashboard(analysis);
    setAddedCards(prev => new Set([...prev, analysis.id]));
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setAddedCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(analysis.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-balance text-3xl font-bold text-foreground">
              Análisis Generado
            </h2>
            <p className="mt-2 text-muted-foreground">
              Se han generado {analyses.length} análisis basados en tus datos
            </p>
          </div>
          {dashboardCardsCount > 0 && (
            <button
              onClick={onGoToDashboard}
              className="whitespace-nowrap rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
            >
              Ver Dashboard ({dashboardCardsCount})
            </button>
          )}
        </div>
      </div>

      {/* Analysis Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {analyses.map(analysis => (
          <div
            key={analysis.id}
            className={`group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md ${
              addedCards.has(analysis.id) ? 'ring-2 ring-accent' : ''
            }`}
          >
            {/* Type Badge */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">{typeIcons[analysis.type]}</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground capitalize">
                {analysis.type}
              </span>
            </div>

            {/* Content */}
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {analysis.title}
            </h3>
            <p className="mb-6 min-h-12 text-sm text-muted-foreground">
              {analysis.description}
            </p>

            {/* Button Group */}
            <div className="flex gap-2">
              <button
                onClick={() => handleAddCard(analysis)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all ${
                  addedCards.has(analysis.id)
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                } active:scale-95`}
              >
                {addedCards.has(analysis.id) ? (
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
        ))}
      </div>

      {/* Empty State Info */}
      {dashboardCardsCount > 0 && (
        <div className="rounded-lg border border-border/50 bg-secondary/30 px-6 py-4 text-sm text-muted-foreground">
          <p>
            Tienes <strong>{dashboardCardsCount}</strong> tarjeta{dashboardCardsCount > 1 ? 's' : ''} en tu dashboard. 
            <button
              onClick={onGoToDashboard}
              className="ml-2 font-medium text-primary hover:underline"
            >
              Ir al dashboard →
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
