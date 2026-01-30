
import type { ChartDataAnalysis } from '@/dashboard/interfaces/chart.interface.interface';

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