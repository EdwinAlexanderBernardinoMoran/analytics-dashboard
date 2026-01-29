import type { AnalyticResponse } from "@/analysis/interfaces/analysis-response.interface";
import { Analytic } from "@/api/analytics.pi";
import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface.interface";
import { AnalysisChartMapper } from "../mappers/analysis-chart.mapper";

export const postFileUpload = async (file: FormData): Promise<ChartDataAnalysis[]> => {
    const response = await Analytic<AnalyticResponse>('/analyze-file', {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        data: file,
    })


    return AnalysisChartMapper.mapResponseToChartData(response.data);
}