import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type StringArrayState = string[]

const stringArraySlice = createSlice({
    name: 'stringArray',
    initialState: [] as StringArrayState,
    reducers: {
        addString: (state, action: PayloadAction<string>) => {
            state.push(action.payload)
        },
    },
});

const store = configureStore({
    reducer: {
        stringArray: stringArraySlice.reducer,
    }
});

export const { addString } = stringArraySlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;