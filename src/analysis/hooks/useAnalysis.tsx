import { AnalyticContext } from "@/context/AnalyticContext";
import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface.interface";
import { useContext, useState } from "react";

export const useAnalysis = () => {

    const { analyses, counChartSuggestions, setCountChartSuggestion, getChartData } = useContext(AnalyticContext);
    const [addedCards, setAddedCards] = useState<Set<string>>(new Set());

    const dashboardCardsCount = analyses.length;

    const handleAddCard = (chartSuggestion: ChartDataAnalysis) => {

        if (!chartSuggestion.id) return;

        const chartSuggestionId = chartSuggestion.id;

        setAddedCards(prev => new Set([...prev, chartSuggestionId]));
        setCountChartSuggestion();
        getChartData(chartSuggestion);
    };

    return {
        // values
        analyses,
        dashboardCardsCount,
        counChartSuggestions,
        addedCards,

        // methods
        handleAddCard,
    }
}