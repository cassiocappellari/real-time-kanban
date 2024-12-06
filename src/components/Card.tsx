import { useState } from "react";
import { useSelector } from "react-redux";
import { addDoneCard, addInProgressCard, AppDispatch, removeDoneCard, removeInProgressCard, removeToDoCard, RootState } from "../store";
import { useDispatch } from "react-redux";
import { ColumnTitle } from "../enums";

interface Props {
    title: string;
    currentColumn: ColumnTitle;
}

export function Card({
    title,
    currentColumn
}: Props) {
    const dispatch: AppDispatch = useDispatch();
    const [isMouseHover, setIsMouseHover] = useState<boolean>(false)
    const toDoCards = useSelector((state: RootState) => state.toDoCards)
    const inProgressCards = useSelector((state: RootState) => state.inProgressCards)
    const doneCards = useSelector((state: RootState) => state.doneCards)

    const removeCard = (title: string) => {
        const todoCard = toDoCards.find(card => card.cardTitle === title);
        const inProgressCard = inProgressCards.find(card => card.cardTitle === title);
        const doneCard = doneCards.find(card => card.cardTitle === title);


        if (todoCard) {
            const cardIndex = toDoCards.indexOf(todoCard)
            dispatch(removeToDoCard(cardIndex))
        };

        if (inProgressCard) {
            const cardIndex = toDoCards.indexOf(inProgressCard)
            dispatch(removeInProgressCard(cardIndex))
        };

        if (doneCard) {
            const cardIndex = toDoCards.indexOf(doneCard)
            dispatch(removeDoneCard(cardIndex))
        };
    }

    const moveCard = (title: string) => {
        const todoCard = toDoCards.find(card => card.cardTitle === title);
        const inProgressCard = inProgressCards.find(card => card.cardTitle === title);

        if (todoCard) {
            const cardIndex = toDoCards.indexOf(todoCard);
            const inProgressCard = {
                cardTitle: title,
                currentColumn: ColumnTitle.IN_PROGRESS
            }

            dispatch(addInProgressCard(inProgressCard))
            dispatch(removeToDoCard(cardIndex))
        }

        if (inProgressCard) {
            const cardIndex = toDoCards.indexOf(inProgressCard);
            const doneCard = {
                cardTitle: title,
                currentColumn: ColumnTitle.DONE
            }

            dispatch(addDoneCard(doneCard))
            dispatch(removeInProgressCard(cardIndex))
        }
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
                    <button onClick={() => removeCard(title)}>
                        x
                    </button>
                </div>
                {currentColumn !== ColumnTitle.DONE && 
                    <div>
                        <button onClick={() => moveCard(title)}>
                            +
                        </button>
                    </div>
                }
            </div>
            </>
            }
        </div>
    )
}