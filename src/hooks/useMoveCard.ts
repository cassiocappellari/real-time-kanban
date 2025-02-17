import { useSelector, useDispatch } from "react-redux";
import { addInProgressCard, addDoneCard, removeToDoCard, removeInProgressCard, AppDispatch, RootState } from "../store";
import { ColumnTitle } from "../enums";

export const useMoveCard = () => {
    const dispatch: AppDispatch = useDispatch();
    const toDoCards = useSelector((state: RootState) => state.toDoCards);
    const inProgressCards = useSelector((state: RootState) => state.inProgressCards);

    const moveCard = (title: string) => {
        const todoCard = toDoCards.find(card => card.cardTitle === title);
        const inProgressCard = inProgressCards.find(card => card.cardTitle === title);

        if (todoCard) {
            dispatch(addInProgressCard({ cardTitle: title, currentColumn: ColumnTitle.IN_PROGRESS }));
            dispatch(removeToDoCard(toDoCards.indexOf(todoCard)));
        }

        if (inProgressCard) {
            dispatch(addDoneCard({ cardTitle: title, currentColumn: ColumnTitle.DONE }));
            dispatch(removeInProgressCard(inProgressCards.indexOf(inProgressCard)));
        }
    };

    return moveCard;
};
