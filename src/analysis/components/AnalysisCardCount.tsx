import { Link } from "react-router";

interface AnalysisCardCountProps {
    dashboardCardsCount: number;
}

export const AnalysisCardCount = ({ dashboardCardsCount }: AnalysisCardCountProps) => {
    return (
        <div className="rounded-lg border border-border/50 bg-secondary/30 px-6 py-4 text-sm text-muted-foreground">
            <p>
                Tienes <strong>{dashboardCardsCount}</strong> grafico{dashboardCardsCount > 1 ? 's' : ''} en tu Panel.
                <Link to="/dashboard" className="ml-2 font-medium text-badge-bar hover:underline">Ir al Panel</Link>
            </p>
        </div>
    )
}