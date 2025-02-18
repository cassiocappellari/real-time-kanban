import { configureStore } from "@reduxjs/toolkit";
import toDoCardsReducer, { addToDoCard, removeToDoCard } from "./toDoCardsSlice";
import inProgressCardsReducer, { addInProgressCard, removeInProgressCard } from "./inProgressCardsSlice";
import doneCardsReducer, { addDoneCard, removeDoneCard } from "./doneCardsSlice";

const store = configureStore({
    reducer: {
        toDoCards: toDoCardsReducer,
        inProgressCards: inProgressCardsReducer,
        doneCards: doneCardsReducer,
    },
});

export { addToDoCard, removeToDoCard, addInProgressCard, removeInProgressCard, addDoneCard, removeDoneCard };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
