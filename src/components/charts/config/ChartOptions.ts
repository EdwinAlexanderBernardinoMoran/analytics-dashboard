import { formatCurrency } from "@/utils/chartDataProcessing";
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
            borderWidth: 1,

            // Agrega el simbolo de moneda al valor del tooltip
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += formatCurrency(context.parsed.y);
                    } else if (context.parsed !== null) {
                        label += formatCurrency(context.parsed);
                    }
                    return label;
                }
            }
        }
    },
});

export const getAxisScalesOptions = (showXGrid: boolean = true) => ({
    y: {
        beginAtZero: true,
        grid: { color: 'hsl(var(--border))' },
        ticks: {
            color: 'hsl(var(--muted-foreground))',
            callback: (value: any) => formatCurrency(Number(value))
        },
    },
    x: {
        grid: {
            display: showXGrid,
            color: 'hsl(var(--border))'
        },
        ticks: { color: 'hsl(var(--muted-foreground))' },
    },
});