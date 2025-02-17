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
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-all relative"
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
        >
            <p className="text-gray-800 font-medium">{title}</p>
            {isMouseHover && (
                <div className="flex justify-between mt-2">
                    <button
                        onClick={() => removeCard(title)}
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-md transition"
                    >
                        ✖ Remove
                    </button>
                    {currentColumn !== ColumnTitle.DONE && (
                        <button
                            onClick={() => moveCard(title)}
                            className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-md transition"
                        >
                            ➜ Move
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
