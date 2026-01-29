import type { AnalyticResponse } from "../interfaces/analysis-response.interface";
import type { ChartData } from "../interfaces/analysis.interface";

export class AnalysisMapper {
    static mapRestAnalysisResponseToChartDataArray(item: AnalyticResponse): ChartData[] {
        // Map all chart_suggestions from the response and add unique IDs
        return item.data.chart_suggestions.map((chart) => ({
            ...chart,
            dataframe_id: item.data.dataframe_id,
            id: crypto.randomUUID(),
        }));
    }
}