import { createAsyncThunk } from "@reduxjs/toolkit"
import { findAllBoardsAPI } from "./board.api"

export const findAllBoards: any = createAsyncThunk('boards/findAllBoards',
async(page: number) => {
    const data:any = await findAllBoardsAPI(page)
    const {message, users}:any = data
    return data
    }
)