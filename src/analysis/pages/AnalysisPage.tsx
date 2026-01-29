import { useContext, useState } from 'react';
import { AnalysisResultsHeader } from '../components/AnalysisResultsHeader';
import { AnalysisCardCount } from '../components/AnalysisCardCount';
import { AnalysisGrid } from '../components/AnalysisGrid';
import { AnalyticContext } from '@/context/AnalyticContext';
import type { ChartDataAnalysis } from '@/dashboard/interfaces/chart.interface.interface';

export function AnalysisPage() {
    const { analyses, counChartSuggestions, setCountChartSuggestion, getChartData } = useContext(AnalyticContext);
    const [addedCards, setAddedCards] = useState<Set<string>>(new Set());

    const dashboardCardsCount = analyses.length; // Placeholder for actual dashboard cards count

    const onGoToDashboard = () => {
        // Placeholder function, implement navigation to dashboard
    };

    const handleAddCard = (chartSuggestion: ChartDataAnalysis) => {

        if (!chartSuggestion.id) return;

        const chartSuggestionId = chartSuggestion.id;

        setAddedCards(prev => new Set([...prev, chartSuggestionId]));
        setCountChartSuggestion();
        getChartData(chartSuggestion);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <AnalysisResultsHeader
                analysesCount={dashboardCardsCount}
                dashboardCardsCount={counChartSuggestions}
                onGoToDashboard={onGoToDashboard}
            />

            {/* Analysis Cards Grid */}
            <AnalysisGrid analyses={analyses} addedCards={addedCards} handleAddCard={handleAddCard} />

            {/* Empty State Info */}
            {counChartSuggestions > 0 && (
                <AnalysisCardCount dashboardCardsCount={counChartSuggestions} onGoToDashboard={onGoToDashboard} />
            )}
        </div>
    );
}
