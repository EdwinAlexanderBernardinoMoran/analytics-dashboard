import { CustomJombotron } from '@/components/custom/CustomJombotron';

import { Link } from "react-router";


interface AnalysisResultsHeaderProps {
    analysesCount: number;
    dashboardCardsCount: number;
}

export function AnalysisResultsHeader({
    analysesCount,
    dashboardCardsCount
}: AnalysisResultsHeaderProps) {
    return (
        <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <CustomJombotron
                        title="Análisis Generado"
                        description={`Se han generado ${analysesCount} análisis basados en tus datos`}
                    />
                </div>

                {dashboardCardsCount > 0 && (

                    <Link to="/dashboard" className="whitespace-nowrap rounded-lg bg-badge-bar px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-badge-bar/70 active:scale-95">Ir Panel</Link>
                )}
            </div>
        </div>
    );
}
