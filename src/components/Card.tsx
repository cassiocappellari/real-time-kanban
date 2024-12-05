interface Props {
    title: string;
}

export function Card({
    title
}: Props) {
    return (
        <div className="bg-red-500 h-16 w-64 border-round text-center rounded">
            <p>
                {title}
            </p>
        </div>
    )
}