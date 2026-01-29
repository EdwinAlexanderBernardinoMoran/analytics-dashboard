import type { ChartType } from "./chart.interface.interface";
import type { Datasets } from "./charts-response.interface";

export interface ChartDataContext {
    title: string;
    chart_type: ChartType;
    datasets: Datasets;
}