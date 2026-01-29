import { useContext } from "react"

import DynamicChart from "@/components/charts/DynamicChart";
import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { EmptyChartsState } from "@/dashboard/components/EmptyChartsState";
import { DashboardCard } from "@/dashboard/components/ChartCard";
import { AnalyticContext } from "@/context/AnalyticContext";
// import { mocksCharts } from "@/mock-data/charts.mock";

export function ChartsPage() {

    const { chartData } = useContext(AnalyticContext);

    const charts = chartData;

    const onRemoveCard = (id: string) => {
        console.log(`Remove card with id: ${id}`);
    };

    const onAddMore = () => {
        console.log("Add more charts");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <CustomJombotron title="Dashboard" description={"Visualiza y gestiona tus gráficos agregados."}
                    />
                </div>
            </div>

            {/* Empty State */}
            {
                charts.length === 0 ? (
                    <EmptyChartsState title="No hay gráficos agregados" description="Añade análisis para comenzar a construir tu dashboard">
                        <button
                            onClick={onAddMore}
                            className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                        >
                            Agregar Primer Gráfico
                        </button>
                    </EmptyChartsState>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2">
                        {charts.map((chart, index) => (
                            <DashboardCard
                                key={chart.title + index}
                                chart={chart}
                                ChartComponent={DynamicChart}
                                onRemoveCard={onRemoveCard}
                            />
                        ))}
                    </div>
                )
            }
        </div >
    );
}
