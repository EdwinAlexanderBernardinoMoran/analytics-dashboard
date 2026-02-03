import type { ChartOptions } from "chart.js";
import { BORDER_COLORS, COLORS } from "./config/ChartColors";
import { getCommonOptions } from "./config/ChartOptions";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
    labels: string[];
    dataValues: number[];
}

export const PieChart = ({ labels, dataValues }: PieChartProps) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Datos',
                data: dataValues,
                backgroundColor: COLORS,
                borderColor: BORDER_COLORS,
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<'pie'> = {
        ...getCommonOptions(),
        plugins: {
            ...getCommonOptions().plugins,
            legend: {
                display: true,
                position: 'right' as const,
                labels: {
                    color: 'hsl(var(--foreground))',
                    font: {
                        size: 12,
                    },
                    padding: 15,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value.toFixed(2)}%`;
                    }
                }
            },
        },
    };
    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Pie data={data} options={options} />
        </div>
    )
}