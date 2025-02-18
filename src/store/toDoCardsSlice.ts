import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../types";


const toDoCardsSlice = createSlice({
    name: "toDoCards",
    initialState: [] as Card[],
    reducers: {
        addToDoCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload);
        },
        removeToDoCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addToDoCard, removeToDoCard } = toDoCardsSlice.actions;
export default toDoCardsSlice.reducer;
