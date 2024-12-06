import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type cardsState = string[]

const cardsSlice = createSlice({
    name: 'cards',
    initialState: [] as cardsState,
    reducers: {
        addCard: (state, action: PayloadAction<string>) => {
            state.push(action.payload)
        },
        removeCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        } 
    },
});

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
    }
});

export const { addCard, removeCard } = cardsSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;