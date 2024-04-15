import {createSlice} from '@reduxjs/toolkit'
import { initialState } from './user.init'
import { findAllUsers, login } from './user.service'

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

const handlePending = ()=>{

}
const handleFulfilled = (state: any,{payload}:any)=>{
    console.log("---------------conclusion--------------")
    state.array = payload
    console.log(JSON.stringify(payload))
}
const handleRejected = ()=>{

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

    builder
    .addCase(findAllUsers.fulfilled, handleFulfilled)
    .addCase(login.fulfilled, (state: any, {payload}:any )=>{state.message=payload})
    }
})

export const AllUsers = (state:any)=>{
    console.log('------------------Before useSelector--------------------')
    return state.user.array;
}
export const getLogin = (state: any) => (
    // console.log('------------------ Before Login useSelector ---------------')
    // console.log(JSON.stringify(state.user.message))
    state.user.message)
  

export const {} = userSlice.actions
export default userSlice.reducer