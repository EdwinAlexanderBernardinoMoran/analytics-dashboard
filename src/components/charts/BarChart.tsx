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

const shouldUseHorizontalBar = (labels: string[]) =>
    labels.some(label => label.length > 25);

const getBarColors = (barCount: number) => {
    if (barCount > 6) {
        return {
            backgroundColor: COLORS[0],
            borderColor: BORDER_COLORS[0],
        };
    }

    return {
        backgroundColor: COLORS.slice(0, barCount),
        borderColor: BORDER_COLORS.slice(0, barCount),
    };
};


export const BarChart = ({ labels, datasets, hasNestedDatasets, dataValues }: BarChartProps) => {

    const isHorizontal = shouldUseHorizontalBar(labels);
    const barCount = labels.length
    const { backgroundColor, borderColor } = getBarColors(barCount);

    const chartDatasets = hasNestedDatasets
        ? datasets.datasets.map((dataset: any) => ({
            label: dataset.label || 'Datos',
            data: dataset.data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
            borderRadius: 8,
        }))
        : [{
            label: 'Datos',
            data: dataValues,
            backgroundColor: COLORS,
            borderColor: BORDER_COLORS,
            borderWidth: 1,
            borderRadius: 8,
        }];

    const data = {
        labels,
        datasets: chartDatasets,
    };

    const options: ChartOptions<'bar'> = {
        ...getCommonOptions(),
        indexAxis: isHorizontal ? 'y' : 'x',
        scales: getAxisScalesOptions(isHorizontal),
        datasets: {
            bar: {
                barPercentage: 0.6,      // Controla el ancho de la barra (0.0 - 1.0)
                categoryPercentage: 0.4, // Controla el espacio de la categoría (0.0 - 1.0)
            }
        }
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    )
}