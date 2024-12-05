import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type cardsState = string[]

const cardsSlice = createSlice({
    name: 'cards',
    initialState: [] as cardsState,
    reducers: {
        addString: (state, action: PayloadAction<string>) => {
            state.push(action.payload)
        },
    },
});

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
    }
});

export const { addString } = cardsSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;