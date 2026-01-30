import { AnalysisResultsHeader } from '../components/AnalysisResultsHeader';
import { AnalysisCardCount } from '../components/AnalysisCardCount';
import { AnalysisGrid } from '../components/AnalysisGrid';
import { useAnalysis } from '../hooks/useAnalysis';

export function AnalysisPage() {
    const { analyses, dashboardCardsCount, counChartSuggestions, addedCards, handleAddCard } = useAnalysis();

    return (
        <div className="space-y-8">
            {/* Header */}
            <AnalysisResultsHeader
                analysesCount={dashboardCardsCount}
                dashboardCardsCount={counChartSuggestions}
            />

            {/* Analysis Cards Grid */}
            <AnalysisGrid analyses={analyses} addedCards={addedCards} handleAddCard={handleAddCard} />

            {/* Empty State Info */}
            {counChartSuggestions > 0 && (
                <AnalysisCardCount dashboardCardsCount={counChartSuggestions} />
            )}
        </div>
    );
}
