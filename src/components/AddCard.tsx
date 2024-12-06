import { useDispatch } from "react-redux"
import { addToDoCard, AppDispatch, RootState } from "../store"
import { useState } from "react";
import { useSelector } from "react-redux";
import { ColumnTitle } from "../enums";

const MAXIMUM_CARDS_NUMBER = 8;

export function AddCard() {
    const dispatch: AppDispatch = useDispatch();
    const cards = useSelector((state: RootState) => state.toDoCards)
    const [cardTitle, setCardTitle] = useState('')

    const handleOnClick = () => {
        if (cards.length < MAXIMUM_CARDS_NUMBER) {
            const newCard = {
                cardTitle,
                currentColumn: ColumnTitle.TO_DO
            };

            dispatch(addToDoCard(newCard))
        }
    }

    return (
        <><div>
            <button onClick={handleOnClick}>
                Add
            </button>
        </div><div>
                <input
                    className="border-2 border-black rounded"
                    name="cardName"
                    type="text"
                    value={cardTitle}
                    onChange={e => setCardTitle(e.target.value)} />
            </div></>
    )
}