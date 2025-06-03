
interface PageHeaderProps {
    title: string;
    description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <section className="py-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </section>
    )
}