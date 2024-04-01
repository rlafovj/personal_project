import {createSlice} from '@reduxjs/toolkit'
import { initialState } from './user.init'
import { getAllUsers } from './user.service'

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
    .addCase(getAllUsers.fulfilled, handleFulfilled)
    }
})

export const AllUsers = (state:any)=>{
    console.log('------------------Before useSelector--------------------')
    return state.user.array.users;
}

export const {} = userSlice.actions
export default userSlice.reducer