import { useDispatch } from "react-redux"
import { addCard, AppDispatch } from "../store"
import { useState } from "react";

export function AddCard() {
    const dispatch: AppDispatch = useDispatch();
    const [cardTitle, setCardTitle] = useState('')

    const handleOnClick = () => {
        const newCard = cardTitle;
        dispatch(addCard(newCard))
    }

    return (
        <><div>
            <button onClick={handleOnClick}>
                Add
            </button>
        </div><div>
                <input name="cardName" type="text" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
            </div></>
    )
}