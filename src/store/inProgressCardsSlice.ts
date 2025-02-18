import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../types";

const inProgressCardsSlice = createSlice({
    name: "inProgressCards",
    initialState: [] as Card[],
    reducers: {
        addInProgressCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload);
        },
        removeInProgressCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addInProgressCard, removeInProgressCard } = inProgressCardsSlice.actions;
export default inProgressCardsSlice.reducer;
