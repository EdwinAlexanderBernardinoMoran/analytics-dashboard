interface AnalysisCardCountProps {
    dashboardCardsCount: number;
    onGoToDashboard: () => void;
}

export const AnalysisCardCount = ({ dashboardCardsCount, onGoToDashboard }: AnalysisCardCountProps) => {
    return (
        <div className="rounded-lg border border-border/50 bg-secondary/30 px-6 py-4 text-sm text-muted-foreground">
            <p>
                Tienes <strong>{dashboardCardsCount}</strong> tarjeta{dashboardCardsCount > 1 ? 's' : ''} en tu dashboard.
                <button
                    onClick={onGoToDashboard}
                    className="ml-2 font-medium text-primary hover:underline"
                >
                    Ir al dashboard →
                </button>
            </p>
        </div>
    )
}