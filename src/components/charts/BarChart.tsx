import type { ChartOptions } from "chart.js";
import { BORDER_COLORS, COLORS } from "./config/ChartColors";
import { getAxisScalesOptions, getCommonOptions } from "./config/ChartOptions";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
    labels: string[];
    datasets: any;
    hasNestedDatasets: boolean;
    dataValues: number[];
}

export const BarChart = ({ labels, datasets, hasNestedDatasets, dataValues }: BarChartProps) => {

    const chartDatasets = hasNestedDatasets
        ? datasets.datasets.map((dataset: any) => ({
            label: dataset.label || 'Datos',
            data: dataset.data,
            backgroundColor: COLORS,
            borderColor: BORDER_COLORS,
            borderWidth: 1,
            borderRadius: 8,
        }))
        : [{
            label: 'Datos',
            data: dataValues,
            backgroundColor: COLORS[1],
            borderColor: BORDER_COLORS[1],
            borderWidth: 1,
            borderRadius: 8,
        }];

    const data = {
        labels,
        datasets: chartDatasets,
    };

    const options: ChartOptions<'bar'> = {
        ...getCommonOptions(),
        scales: getAxisScalesOptions(false),
        datasets: {
            bar: {
                barPercentage: 0.8,      // Controla el ancho de la barra (0.0 - 1.0)
                categoryPercentage: 0.6, // Controla el espacio de la categoría (0.0 - 1.0)
            }
        }
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    )
}