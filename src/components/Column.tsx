interface Props {
    title: string;
}

export function Column({
    title
}: Props) {
    return (
        <div className="bg-blue-500 h-screen w-64 border-round text-center rounded">
            <p>
                {title}
            </p>
        </div>
    )
}