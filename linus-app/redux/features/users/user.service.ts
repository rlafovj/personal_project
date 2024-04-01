import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersAPI } from "./user.api";

export const getAllUsers: any = createAsyncThunk('users/getAllUsers',
async(page: number) => {
    const data:any = await getAllUsersAPI(page)
    const {message, users}:any = data
    return data
}
)