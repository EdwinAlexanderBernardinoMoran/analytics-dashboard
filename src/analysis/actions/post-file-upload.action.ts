import { Analytic } from "@/api/analytics.pi";
import type { AnalyticResponse } from "../interfaces/analysis-response.interface";
import { AnalysisMapper } from "../mappers/analysis.mapper";
import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface";

export const postFileUpload = async (file: FormData): Promise<ChartDataAnalysis[]> => {
    const response = await Analytic<AnalyticResponse>('/analyze-file', {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        data: file,
    })


    return AnalysisMapper.mapRestAnalysisResponseToChartDataArray(response.data);
}