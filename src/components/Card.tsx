import { useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, removeCard, RootState } from "../store";
import { useDispatch } from "react-redux";

interface Props {
    title: string;
}

export function Card({
    title
}: Props) {
    const dispatch: AppDispatch = useDispatch();
    const [isMouseHover, setIsMouseHover] = useState<boolean>(false)
    const cards = useSelector((state: RootState) => state.cards)

    const handleOnClick = (title: string) => {
        const cardIndex = cards.indexOf(title);
        dispatch(removeCard(cardIndex))
    }

    return (
        <div 
            className="bg-red-500 h-16 w-64 border-round text-center rounded" 
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
        >
            <p>
                {title}
            </p>
            {isMouseHover && 
            <>
            <div className="flex flex-row justify-around">
                <div>
                    <button onClick={() => handleOnClick(title)}>
                        x
                    </button>
                </div>
                <div>
                    <button onClick={() => handleOnClick(title)}>
                        +
                    </button>
                </div>
            </div>
            </>
            }
        </div>
    )
}