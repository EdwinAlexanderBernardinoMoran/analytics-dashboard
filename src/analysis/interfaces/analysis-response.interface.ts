import type { ChartType } from "@/dashboard/interfaces/chart.interface.interface";

export interface AnalyticResponse {
    status_code: number;
    message: string;
    data: Data;
}

export interface Data {
    dataframe_id: string;
    chart_suggestions: ChartSuggestion[];
}

export interface ChartSuggestion {
    title: string;
    chart_type: ChartType;
    parameters: Parameters;
    insight: string;
}

export interface Parameters {
    x_axis: string;
    y_axis: string[] | string;
    aggregation: string;
    metric_label: string;
}
