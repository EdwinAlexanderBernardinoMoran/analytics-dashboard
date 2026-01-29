import type { AnalyticResponse } from "@/analysis/interfaces/analysis-response.interface";
import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface.interface";

export class AnalysisChartMapper {
    static mapResponseToChartData(item: AnalyticResponse): ChartDataAnalysis[] {
        // Map all chart_suggestions from the response and add unique IDs
        return item.data.chart_suggestions.map((chart) => ({
            ...chart,
            dataframe_id: item.data.dataframe_id,
            id: crypto.randomUUID(),
        }));
    }
}