import { Analytic } from "@/api/analytics.pi";
import type { Chart, ChartParams } from "@/dashboard/interfaces/chart.interface.interface";
import type { ApiChartsResponse } from "@/dashboard/interfaces/charts-response.interface";
import { ChartMapper } from "../mappers/charts.mapper";

export const getChartData = async (data: ChartParams): Promise<Chart> => {
    const response = await Analytic<ApiChartsResponse>('/get-chart-data', {
        method: 'POST',
        data: data,
    })

    return ChartMapper.mapRestChartResponseToChartData(response.data)
}