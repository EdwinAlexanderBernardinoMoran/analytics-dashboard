import { useContext } from "react"

import DynamicChart from "@/components/charts/DynamicChart";
import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { DashboardCard } from "@/dashboard/components/ChartCard";
import { AnalyticContext } from "@/context/AnalyticContext";

export function ChartsPage() {

    const { chartData } = useContext(AnalyticContext);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <CustomJombotron title="Panel" description={"Ver tus gráficos agregados."}
                    />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                {chartData.map((chart, index) => (
                    <DashboardCard
                        key={chart.title + index}
                        chart={chart}
                        ChartComponent={DynamicChart}
                    />
                ))}
            </div>
        </div >
    );
}
