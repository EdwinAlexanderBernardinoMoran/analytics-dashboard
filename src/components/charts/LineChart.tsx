import { groupByMonth, groupDatasetsByMonth, shouldGroupData } from "@/utils/chartDataProcessing";
import { BORDER_COLORS, COLORS } from "./config/ChartColors";
import { getAxisScalesOptions, getCommonOptions } from "./config/ChartOptions";
import type { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

interface LineChartProps {
    labels: string[];
    datasets: any;
    hasNestedDatasets: boolean;
    dataValues: number[];
}

export const LineChart = ({ labels, datasets, hasNestedDatasets, dataValues }: LineChartProps) => {
    let processedLabels = labels;
    let processedDatasets = hasNestedDatasets ? datasets.datasets : null;

    if (shouldGroupData(labels.length)) {
        if (hasNestedDatasets) {
            // Group multiple datasets
            const grouped = groupDatasetsByMonth(labels, datasets.datasets);
            processedLabels = grouped.labels;
            processedDatasets = grouped.datasets;
        } else {
            // Group single dataset
            const grouped = groupByMonth(labels, dataValues);
            processedLabels = grouped.labels;
        }
    }

    // Handle nested datasets structure
    const chartDatasets = processedDatasets ? processedDatasets.map((dataset: any, index: number) => ({
        label: dataset.label || 'Datos',
        data: dataset.data,
        borderColor: BORDER_COLORS[index % BORDER_COLORS.length],
        backgroundColor: COLORS[index % COLORS.length],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: BORDER_COLORS[index % BORDER_COLORS.length],
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
    }))
        : [{
            label: 'Datos',
            data: shouldGroupData(labels.length) ? groupByMonth(labels, dataValues).data : dataValues,
            borderColor: BORDER_COLORS[0],
            backgroundColor: COLORS[0],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: BORDER_COLORS[0],
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
        }];

    const data = {
        labels: processedLabels,
        datasets: chartDatasets,
    };

    const options: ChartOptions<'line'> = {
        ...getCommonOptions(),
        scales: getAxisScalesOptions(true),
    };
    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    )
}