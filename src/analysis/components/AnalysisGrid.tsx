import type { ChartDataAnalysis } from "@/dashboard/interfaces/chart.interface";
import { AnalysisGridCard } from "./AnalysisGridCard";

interface AnalysisGridProps {
    analyses: ChartDataAnalysis[];
    addedCards: Set<string>;
    handleAddCard: (analysis: any) => void;
}


export const AnalysisGrid = ({ analyses, addedCards, handleAddCard }: AnalysisGridProps) => {

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {analyses.map((item) => (
                <AnalysisGridCard key={item.id || item.title} item={item} addedCards={addedCards} handleAddCard={handleAddCard} />
            ))}
        </div>
    )
}