import type { Parameters } from "@/analysis/interfaces/analysis-response.interface";
import type { Datasets } from "./charts-response.interface";

export type ChartType = 'bar' | 'line' | 'pie' | 'scatter';

// Interface used to generate the charts in the dashboard
export interface Chart {
    chart_type: ChartType;
    datasets: Datasets;
}

// Interface used at the endpoint to request information about a specific chart.
export interface ChartParams {
    dataframe_id: string;
    chart_type: ChartType;
    x_axis: string;
    y_axis: string[] | string;
    aggregation: string;
    metric_label: string;
}

// Interface displaying the results of suggestions from the file information charts 
export interface ChartDataAnalysis {
    id: string; // Unique ID generated from dataframe_id + title
    title: string;
    chart_type: ChartType;
    parameters: Parameters;
    insight: string;
    dataframe_id: string;
}