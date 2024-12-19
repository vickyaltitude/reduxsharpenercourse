
import { createSlice,configureStore } from '@reduxjs/toolkit'

const initialState = {count:0,showCount:true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
             state.count = state.count + 5 
            },
        increase(state,action){
            state.count = state.count + action.payload
        },
        decrement(state){
            state.count = state.count - 5 
        },
        showToggler(state){
          
             state.showCount = !state.showCount
        } 
    }
})

const isAuthenticated = {
    userAuthenticated: false
}


const userAuth = createSlice({
    name: 'auth',
    initialState: isAuthenticated,
    reducers:{
        login(state){
            state.userAuthenticated = true
        },
        logout(state){
            state.userAuthenticated = false
        }
    }
})


const store = configureStore({
    reducer : { counter : counterSlice.reducer , auth: userAuth.reducer}
});


export const counterSliceAction = counterSlice.actions;
export const userAuthAction = userAuth.actions;
export default store;