import type { ChartType } from "./chart.interface";

export interface ApiChartResponse {
    status_code: number;
    message: string;
    data: Data;
}

export interface Data {
    chart_type: ChartType;
    datasets: Datasets;
}

export interface Datasets {
    labels: string[];
    data: number[];
}
