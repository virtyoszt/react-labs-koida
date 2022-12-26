import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    value: 0,
    defaultChangeCounter: 1,
    lesson: {
        lecture: 10,
        topic: 'Redux Toolkit'
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterAction: (state) => {
            state.value += Number(defaultState.defaultChangeCounter);
        },
        decreaseCounterAction: (state) => {
            state.value -= Number(defaultState.defaultChangeCounter);
        }
    }
})

export const { increaseCounterAction, decreaseCounterAction
} = counterSlice.actions;
export default counterSlice.reducer;