import type { PropsWithChildren } from "react";

interface EmptyChartsStateProps extends PropsWithChildren {
    title: string;
    description: string;
}

export const EmptyChartsState = ({ title, description, children }: EmptyChartsStateProps) => {
    return (
        <div className="flex min-h-96 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 gap-4">
            <div className="text-4xl">📊</div>
            <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

            {children}
        </div>
    )
}