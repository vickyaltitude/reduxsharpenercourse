
import { createSlice,configureStore } from '@reduxjs/toolkit'

const initialState = {count:0,showCount:true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
             state.count++ 
            },
        increase(state,action){
            state.count = state.count + action.amount
        },
        decrement(state){
            state.count--
        },
        toggle(state){
             state.showCount = !state.showCount
        } 
    }
})





const store = configureStore({
    counter : counterSlice.reducer
});

export default store;