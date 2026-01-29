import type { ChartType } from "./chart.interface.interface";

export interface ApiChartsResponse {
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
    data?: number[];
    datasets?: Dataset[];
}

export interface Dataset {
    label: string;
    data: number[];
}