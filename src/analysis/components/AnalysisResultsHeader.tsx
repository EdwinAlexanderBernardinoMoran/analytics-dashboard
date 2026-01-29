import { CustomJombotron } from '@/components/custom/CustomJombotron';

interface AnalysisResultsHeaderProps {
    analysesCount: number;
    dashboardCardsCount: number;
    onGoToDashboard: () => void;
}

export function AnalysisResultsHeader({
    analysesCount,
    dashboardCardsCount,
    onGoToDashboard,
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
                    <button
                        onClick={onGoToDashboard}
                        className="whitespace-nowrap rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                    >
                        Ver Dashboard ({dashboardCardsCount})
                    </button>
                )}
            </div>
        </div>
    );
}
