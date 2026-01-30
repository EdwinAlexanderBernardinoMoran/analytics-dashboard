import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { Datasets } from '@/dashboard/interfaces/charts-response.interface';
import type { ChartType } from '@/dashboard/interfaces/chart.interface.interface';
import { BORDER_COLORS, COLORS } from './config/ChartColors';
import { getAxisScalesOptions, getCommonOptions } from './config/ChartOptions';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface DynamicChartProps {
    chart_type: ChartType;
    datasets: Datasets | any;
}

export default function DynamicChart({ chart_type, datasets }: DynamicChartProps) {
    // Transform data for Chart.js
    const labels = datasets.labels || [];

    // Check if datasets has nested datasets array (for line/bar charts with multiple series)
    const hasNestedDatasets = datasets.datasets && Array.isArray(datasets.datasets);
    const dataValues = datasets.data || [];

    if (chart_type === 'line') {
        return <LineChart labels={labels} datasets={datasets} hasNestedDatasets={hasNestedDatasets} dataValues={dataValues} />
    }

    if (chart_type === 'bar') {
        return <BarChart labels={labels} datasets={datasets} hasNestedDatasets={hasNestedDatasets} dataValues={dataValues} />
    }

    if (chart_type === 'pie') {
        return <PieChart labels={labels} dataValues={dataValues} />
    }

    // Fallback for scatter or unknown types - use bar chart
    const data = {
        labels,
        datasets: [
            {
                label: 'Datos',
                data: dataValues,
                backgroundColor: COLORS[0],
                borderColor: BORDER_COLORS[0],
                borderWidth: 1,
                borderRadius: 8,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        ...getCommonOptions(),
        scales: getAxisScalesOptions(false),
        datasets: {
            bar: {
                barPercentage: 0.5,      // Controla el ancho de la barra (0.0 - 1.0)
                categoryPercentage: 0.7, // Controla el espacio de la categoría (0.0 - 1.0)
            }
        }
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
}
