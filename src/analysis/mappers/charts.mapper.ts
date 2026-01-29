import type { ApiChartResponse } from "../interfaces/charts-pie-response.interface";
import type { Chart } from "../interfaces/chart.interface";

export class ChartMapper {
    static mapRestChartResponseToChartData(item: ApiChartResponse): Chart {
        // Map all chart_suggestions from the response and add unique IDs
        return {
            chart_type: item.data.chart_type,
            datasets: item.data.datasets
        }
    }
}