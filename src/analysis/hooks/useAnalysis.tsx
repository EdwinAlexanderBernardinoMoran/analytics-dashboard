import { useContext } from "react";
import { AnalyticContext } from "@/context/AnalyticContext";
import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface.interface";

export const useAnalysis = () => {

    const { analyses, counChartSuggestions, setCountChartSuggestion, getChartData, addedCards, addCard } = useContext(AnalyticContext);

    const dashboardCardsCount = analyses.length;

    const handleAddCard = (chartSuggestion: ChartDataAnalysis) => {

        if (!chartSuggestion.id) return;

        const chartSuggestionId = chartSuggestion.id;

        addCard(chartSuggestionId);
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