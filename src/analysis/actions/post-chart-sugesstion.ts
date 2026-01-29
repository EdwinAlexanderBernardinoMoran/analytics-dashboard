import { Analytic } from "@/api/analytics.pi";
import type { ApiChartResponse } from "../interfaces/charts-pie-response.interface";
import type { ChartParams } from "../interfaces/analysis.interface";
import { ChartMapper } from "../mappers/charts.mapper";
import type { Chart } from "../interfaces/chart.interface";

export const getChartData = async (data: ChartParams): Promise<Chart> => {
    const response = await Analytic<ApiChartResponse>('/get-chart-data', {
        method: 'POST',
        data: data,
    })

    return ChartMapper.mapRestChartResponseToChartData(response.data)
}