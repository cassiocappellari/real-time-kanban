import { useState } from "react";
import { ColumnTitle } from "../enums";
import { useRemoveCard } from "../hooks/useRemoveCard";
import { useMoveCard } from "../hooks/useMoveCard";

interface Props {
    title: string;
    currentColumn: ColumnTitle;
}

export function Card({ title, currentColumn }: Props) {
    const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
    const removeCard = useRemoveCard();
    const moveCard = useMoveCard();

    return (
        <div
            className="bg-red-500 h-16 w-64 border-round text-center rounded"
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
        >
            <p>{title}</p>
            {isMouseHover && (
                <div className="flex flex-row justify-around">
                    <button onClick={() => removeCard(title)}>x</button>
                    {currentColumn !== ColumnTitle.DONE && (
                        <button onClick={() => moveCard(title)}>+</button>
                    )}
                </div>
            )}
        </div>
    );
}
