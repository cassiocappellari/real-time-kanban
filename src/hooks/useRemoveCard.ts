import { useSelector, useDispatch } from "react-redux";
import { removeToDoCard, removeInProgressCard, removeDoneCard, AppDispatch, RootState } from "../store";

export const useRemoveCard = () => {
    const dispatch: AppDispatch = useDispatch();
    const toDoCards = useSelector((state: RootState) => state.toDoCards);
    const inProgressCards = useSelector((state: RootState) => state.inProgressCards);
    const doneCards = useSelector((state: RootState) => state.doneCards);

    const removeCard = (title: string) => {
        const todoCard = toDoCards.find(card => card.cardTitle === title);
        const inProgressCard = inProgressCards.find(card => card.cardTitle === title);
        const doneCard = doneCards.find(card => card.cardTitle === title);

        if (todoCard) {
            dispatch(removeToDoCard(toDoCards.indexOf(todoCard)));
        }

        if (inProgressCard) {
            dispatch(removeInProgressCard(inProgressCards.indexOf(inProgressCard)));
        }

        if (doneCard) {
            dispatch(removeDoneCard(doneCards.indexOf(doneCard)));
        }
    };

    return removeCard;
};
