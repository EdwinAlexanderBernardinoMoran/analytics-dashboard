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
import { Line, Bar, Pie } from 'react-chartjs-2';
import { shouldGroupData, groupDatasetsByMonth, groupByMonth } from '@/utils/chartDataProcessing';
import type { Datasets } from '@/dashboard/interfaces/charts-response.interface';
import type { ChartType } from '@/dashboard/interfaces/chart.interface.interface';

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

const COLORS = [
    'rgba(59, 130, 246, 0.8)',   // blue
    'rgba(16, 185, 129, 0.8)',   // green
    'rgba(251, 146, 60, 0.8)',   // orange
    'rgba(244, 63, 94, 0.8)',    // rose
    'rgba(168, 85, 247, 0.8)',   // purple
    'rgba(234, 179, 8, 0.8)',    // yellow
    'rgba(34, 197, 94, 0.8)',    // emerald
    'rgba(14, 165, 233, 0.8)',   // sky
    'rgba(236, 72, 153, 0.8)',   // pink
    'rgba(249, 115, 22, 0.8)',   // amber
    'rgba(37, 99, 235, 0.8)',   // indigo
    'rgba(6, 182, 212, 0.8)',   // cyan
    'rgba(251, 191, 36, 0.8)',   // yellow-400
    'rgba(16, 185, 129, 0.8)',   // green-400
    'rgba(239, 68, 68, 0.8)',    // red-500
];

const BORDER_COLORS = [
    'rgba(59, 130, 246, 1)',
    'rgba(16, 185, 129, 1)',
    'rgba(251, 146, 60, 1)',
    'rgba(244, 63, 94, 1)',
    'rgba(168, 85, 247, 1)',
    'rgba(234, 179, 8, 1)',
    'rgba(34, 197, 94, 1)',
    'rgba(14, 165, 233, 1)',
    'rgba(236, 72, 153, 1)',
    'rgba(249, 115, 22, 1)',
    'rgba(37, 99, 235, 0.8)',
    'rgba(6, 182, 212, 0.8)',
    'rgba(251, 191, 36, 0.8)',
    'rgba(16, 185, 129, 0.8)',
    'rgba(239, 68, 68, 0.8)',
];

export default function DynamicChart({ chart_type, datasets }: DynamicChartProps) {
    // Transform data for Chart.js
    const labels = datasets.labels || [];

    // Check if datasets has nested datasets array (for line/bar charts with multiple series)
    const hasNestedDatasets = datasets.datasets && Array.isArray(datasets.datasets);
    const dataValues = datasets.data || [];

    // Common options for all charts
    const commonOptions: ChartOptions<any> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    color: 'hsl(var(--foreground))',
                    font: {
                        size: 12,
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#111827',
                bodyColor: '#111827',
                borderColor: '#E5E7EB',
                borderWidth: 1,
            }
        },
    };

    if (chart_type === 'line') {
        // Check if we should group data by month (if more than 50 data points)
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
        const chartDatasets = processedDatasets
            ? processedDatasets.map((dataset: any, index: number) => ({
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
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'hsl(var(--border))',
                    },
                    ticks: {
                        color: 'hsl(var(--muted-foreground))',
                    },
                },
                x: {
                    grid: {
                        color: 'hsl(var(--border))',
                    },
                    ticks: {
                        color: 'hsl(var(--muted-foreground))',
                    },
                },
            },
        };

        return (
            <div style={{ height: '300px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        );
    }

    if (chart_type === 'bar') {
        // Handle nested datasets structure for bar charts too
        const chartDatasets = hasNestedDatasets
            ? datasets.datasets.map((dataset: any, index: number) => ({
                label: dataset.label || 'Datos',
                data: dataset.data,
                backgroundColor: COLORS[index % COLORS.length],
                borderColor: BORDER_COLORS[index % BORDER_COLORS.length],
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
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'hsl(var(--border))',
                    },
                    ticks: {
                        color: 'hsl(var(--muted-foreground))',
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: 'hsl(var(--muted-foreground))',
                    },
                },
            },
        };

        return (
            <div style={{ height: '300px', width: '100%' }}>
                <Bar data={data} options={options} />
            </div>
        );
    }

    if (chart_type === 'pie') {
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
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
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
            },
        };

        return (
            <div style={{ height: '300px', width: '100%' }}>
                <Pie data={data} options={options} />
            </div>
        );
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
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'hsl(var(--border))',
                },
                ticks: {
                    color: 'hsl(var(--muted-foreground))',
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'hsl(var(--muted-foreground))',
                },
            },
        },
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
}
