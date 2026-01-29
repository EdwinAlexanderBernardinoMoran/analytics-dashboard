import type { Chart } from "@/dashboard/interfaces/chart.interface.interface";
import type { ApiChartsResponse } from "@/dashboard/interfaces/charts-response.interface";


export class ChartMapper {
    static mapRestChartResponseToChartData(item: ApiChartsResponse): Chart {
        return {
            chart_type: item.data.chart_type,
            datasets: item.data.datasets
        }
    }
}