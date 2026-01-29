import type { Datasets as DatasetsLine } from "../../dashboard/interfaces/chart-line-response";
import type { Datasets as DatasetPie } from "@/dashboard/interfaces/charts-pie-response.interface";
import type { ChartType } from "@/dashboard/interfaces/chart.interface";

// export interface Test {
//     id: string;
//     title: string;
//     description: string;
//     type: 'trend' | 'distribution' | 'comparison' | 'performance';
//     data?: any;
// }


// export interface ChartParams {
//     dataframe_id: string;
//     chart_type: ChartType;
//     x_axis: string;
//     y_axis: string | string[];
// }

// export interface ChartData {
//     id: string; // Unique ID generated from dataframe_id + title
//     title: string;
//     chart_type: ChartType;
//     parameters: Parameters;
//     insight: string;
//     dataframe_id: string;
// }

export interface ChartDataPieContext {
    title: string;
    chart_type: ChartType;
    datasets: DatasetPie;
}

export interface ChartDataLineContext {
    title: string;
    chart_type: ChartType;
    datasets: DatasetsLine;
}

// Union type for any chart data context
export type ChartDataContext = ChartDataPieContext | ChartDataLineContext;