import { Analytic } from "@/api/analytics.pi";
import type { Chart, ChartParams } from "@/dashboard/interfaces/chart.interface.interface";
import type { ApiChartsResponse } from "@/dashboard/interfaces/charts-response.interface";
import { ChartMapper } from "../mappers/charts.mapper";

export const getChartData = async (data: ChartParams): Promise<Chart> => {
    const response = await Analytic<ApiChartsResponse>('/chart/data', {
        params: data,
        paramsSerializer: {
            indexes: null, // Esto hace que los arrays se serialicen como: y_axis=val1&y_axis=val2
        }
    })

    return ChartMapper.mapRestChartResponseToChartData(response.data)
}