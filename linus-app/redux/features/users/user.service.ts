import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk('users/findAllUsers',
async(page: number) => {
    const data:any = await findAllUsersAPI(page)
    const {message, users}:any = data
    return data
}
)