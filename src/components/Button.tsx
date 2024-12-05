import { useDispatch } from "react-redux"
import { addString, AppDispatch } from "../store"

export function Button() {
    const dispatch: AppDispatch = useDispatch();

    const handleOnClick = () => {
        const newCard = 'card';
        dispatch(addString(newCard))
    }

    return (
        <div>
            <button onClick={handleOnClick}>
                Add
            </button>
        </div>
    )
}