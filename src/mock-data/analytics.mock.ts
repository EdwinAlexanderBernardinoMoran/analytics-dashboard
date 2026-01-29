
import type { ChartDataAnalysis } from '@/dashboard/interfaces/chart.interface';
// import { mockAnalyses } from '@/mock-data/analytics.mock';
// import type { AnalysisResult } from "@/analysis/interfaces/analysis.interface";

// export const mockTest: Test[] = [
//     {
//         id: '1',
//         title: 'Tendencia de Crecimiento',
//         description: 'Análisis de la tendencia de crecimiento mensual con proyección a futuro',
//         type: 'trend',
//         data: {
//             labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
//             values: [65, 78, 85, 92, 88, 95]
//         }
//     },
//     {
//         id: '2',
//         title: 'Distribución de Datos',
//         description: 'Desglose por categoría y análisis de concentración',
//         type: 'distribution',
//         data: {
//             labels: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
//             values: [35, 25, 20, 20]
//         }
//     },
//     {
//         id: '3',
//         title: 'Análisis Comparativo',
//         description: 'Comparación de métricas clave entre períodos',
//         type: 'comparison',
//         data: {
//             labels: ['Métrica 1', 'Métrica 2', 'Métrica 3', 'Métrica 4'],
//             series: [
//                 { name: 'Período Anterior', values: [40, 60, 75, 55] },
//                 { name: 'Período Actual', values: [65, 78, 88, 72] }
//             ]
//         }
//     },
//     {
//         id: '4',
//         title: 'Indicadores de Desempeño',
//         description: 'KPIs principales y su evolución temporal',
//         type: 'performance',
//         data: {
//             labels: ['KPI 1', 'KPI 2', 'KPI 3', 'KPI 4', 'KPI 5'],
//             values: [92, 85, 78, 88, 95]
//         }
//     }
// ];

export const mockAnalyses: ChartDataAnalysis[] = [
    {
        "id": crypto.randomUUID(),
        "dataframe_id": "mock-dataframe-001",
        "title": "Ventas Totales por Tipo de Producto",
        "chart_type": "bar",
        "parameters": {
            "x_axis": "Tipo de producto",
            "y_axis": "Importe venta total"
        },
        "insight": "Este gráfico de barras muestra la contribución de cada tipo de producto a las ventas totales. Permite identificar rápidamente qué categorías de productos son las más rentables y cuáles podrían necesitar una estrategia de marketing o ventas diferente. Los productos con mayor 'Importe venta total' son los pilares del negocio."
    },
    {
        "id": crypto.randomUUID(),
        "dataframe_id": "mock-dataframe-001",
        "title": "Tendencia de Ventas Totales a lo largo del Tiempo",
        "chart_type": "line",
        "parameters": {
            "x_axis": "Fecha pedido",
            "y_axis": "Importe venta total"
        },
        "insight": "Este gráfico de línea ilustra la evolución del importe de ventas totales a lo largo del tiempo, basándose en la fecha del pedido. Es fundamental para detectar patrones estacionales, tendencias de crecimiento o decrecimiento, y el impacto de eventos específicos en las ventas, ayudando a la planificación futura."
    },
    {
        "id": crypto.randomUUID(),
        "dataframe_id": "mock-dataframe-001",
        "title": "Distribución de Ventas por Canal",
        "chart_type": "pie",
        "parameters": {
            "x_axis": "Canal de venta",
            "y_axis": "Importe venta total"
        },
        "insight": "El gráfico de pastel representa la proporción de las ventas totales generadas por cada canal de venta (Online vs. Offline). Revela qué canal es el dominante en términos de ingresos, lo que es crucial para la asignación de recursos y el desarrollo de estrategias de canal."
    },
    {
        "id": crypto.randomUUID(),
        "dataframe_id": "mock-dataframe-001",
        "title": "Comparación de Ventas y Costes Totales por Zona Geográfica",
        "chart_type": "bar",
        "parameters": {
            "x_axis": "Zona",
            "y_axis": [
                "Importe venta total",
                "Importe Coste total"
            ]
        },
        "insight": "Este gráfico de barras doble compara el 'Importe venta total' y el 'Importe Coste total' para cada zona geográfica. Permite evaluar la rentabilidad bruta de cada región, identificando zonas de alto rendimiento y aquellas donde los costes pueden estar erosionando los márgenes a pesar de las ventas."
    }
];