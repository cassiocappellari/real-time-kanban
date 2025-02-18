import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../types";

const doneCardsSlice = createSlice({
    name: "doneCards",
    initialState: [] as Card[],
    reducers: {
        addDoneCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload);
        },
        removeDoneCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addDoneCard, removeDoneCard } = doneCardsSlice.actions;
export default doneCardsSlice.reducer;
