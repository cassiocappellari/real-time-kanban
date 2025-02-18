import { useState } from "react";
import { useAddCard } from "../hooks/useAddCard";

export function AddCard() {
    const [cardTitle, setCardTitle] = useState('');
    const { addCard } = useAddCard();

    const handleOnClick = () => {
        addCard(cardTitle);
        setCardTitle('');
    };

    return (
        <div className="flex flex-col items-center space-y-3 bg-white p-4 rounded-xl shadow-lg border border-gray-300">
            <input
                className="border-2 border-gray-300 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="cardName"
                type="text"
                placeholder="Enter card title..."
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
            />
            <button
                onClick={handleOnClick}
                disabled={!cardTitle.trim()}
                className={`px-6 py-2 rounded-lg shadow-md transition-all font-semibold ${
                    !cardTitle.trim()
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
                Add Card
            </button>
        </div>
    );
}
