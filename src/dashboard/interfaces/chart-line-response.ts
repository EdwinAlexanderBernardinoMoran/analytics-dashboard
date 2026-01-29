export interface APIChartLineResponse {
    status_code: number;
    message: string;
    data: Data;
}

export interface Data {
    chart_type: string;
    datasets: Datasets;
}

export interface Datasets {
    labels: string[];
    datasets: Dataset[];
}

export interface Dataset {
    label: string;
    data: number[];
}
