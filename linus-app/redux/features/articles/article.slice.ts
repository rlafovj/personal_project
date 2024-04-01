import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import {IArticle} from './article.model'
import { fetchAllArticles } from "./article.service";
import { fetchAllArticlesAPI } from "./article.api";

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handlePending = (state : any) => {
    
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('-------------------conclusion-------------------')
    state.array = payload
    console.log(JSON.stringify(payload))
  }

const handleRejected = (state : any) => {
    
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending,rejected} = status;

    builder
      .addCase(fetchAllArticles.fulfilled,handleFulfilled)
    }
  }
)

export const getAllArticles = (state: any) => {
  console.log('------------------ Before useSelector ---------------')
  console.log(JSON.stringify(state.article.array.result))
  return state.article.array.result;
}

export const {} = articleSlice.actions
export default articleSlice.reducer