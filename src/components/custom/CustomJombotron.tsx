interface CustomJombotronProps {
    title: string;
    description: string;
}

export const CustomJombotron = ({ title, description }: CustomJombotronProps) => {
    return (
        <>
            <h2 className="text-balance text-3xl font-bold text-foreground">
                {title}
            </h2>
            <p className="mt-2 text-muted-foreground">
                {description}
            </p>
        </>
    )
}