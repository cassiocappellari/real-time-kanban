import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColumnTitle } from './enums';

type Card = {
    cardTitle: string;
    currentColumn: ColumnTitle
}

const toDoCardsSlice = createSlice({
    name: 'toDoCards',
    initialState: [] as Card[],
    reducers: {
        addToDoCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload)
        },
        removeToDoCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        } 
    },
});

const inProgressCardsSlice = createSlice({
    name: 'inProgressCards',
    initialState: [] as Card[],
    reducers: {
        addInProgressCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload)
        },
        removeInProgressCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        } 
    },
});

const doneCardsSlice = createSlice({
    name: 'doneCards',
    initialState: [] as Card[],
    reducers: {
        addDoneCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload)
        },
        removeDoneCard: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        } 
    },
});

const store = configureStore({
    reducer: {
        toDoCards: toDoCardsSlice.reducer,
        inProgressCards: inProgressCardsSlice.reducer,
        doneCards: doneCardsSlice.reducer,
    }
});

export const { addToDoCard, removeToDoCard } = toDoCardsSlice.actions;
export const { addInProgressCard, removeInProgressCard } = inProgressCardsSlice.actions;
export const { addDoneCard, removeDoneCard } = doneCardsSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;