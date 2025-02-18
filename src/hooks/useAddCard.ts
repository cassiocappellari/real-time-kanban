import { useDispatch, useSelector } from "react-redux";
import { addToDoCard, AppDispatch, RootState } from "../store";
import { ColumnTitle } from "../enums";

const MAXIMUM_CARDS_NUMBER = 8;

export function useAddCard() {
    const dispatch: AppDispatch = useDispatch();
    const cards = useSelector((state: RootState) => state.toDoCards);

    const addCard = (cardTitle: string) => {
        if (cards.length < MAXIMUM_CARDS_NUMBER) {
            const newCard = {
                cardTitle,
                currentColumn: ColumnTitle.TO_DO
            };

            dispatch(addToDoCard(newCard));
        }

        if (cards.length === MAXIMUM_CARDS_NUMBER) {
            window.alert('You reached the limit of created cards!')
        }
    };

    return { addCard };
}
