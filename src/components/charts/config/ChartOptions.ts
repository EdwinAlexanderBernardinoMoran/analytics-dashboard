import type { ChartOptions } from "chart.js";

export const getCommonOptions = (): ChartOptions<any> => ({
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
            borderWidth: 1
        }
    },
});

export const getAxisScalesOptions = (showXGrid: boolean = true) => ({
    y: {
        beginAtZero: true,
        grid: { color: 'hsl(var(--border))' },
        ticks: {
            color: 'hsl(var(--muted-foreground))',
        },
    },
    x: {
        grid: {
            display: showXGrid,
            color: 'hsl(var(--border))'
        },
        ticks: {
            color: 'hsl(var(--muted-foreground))',
            maxRotation: 45,
            minRotation: 45,
            autoSkip: true,
            maxTicksLimit: 15,
        },
    },
});