'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, styled} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/redux/features/boards/board.service";
import { getAllBoards } from "@/redux/features/boards/board.slice";
import Columns from "@/app/components/boards/BoardColumns";
import { StripedDataGrid } from "@/app/components/common/style/board";
// import React from "react";


const BoardListPage: NextPage = ({data}:any) => {
    const dispatch = useDispatch()
 
   const allBoards: [] = useSelector(getAllBoards)

    if(allBoards !== undefined){
        console.log('allBoards is not undefined')
        
        console.log('length is '+ allBoards.length)
        for(let i=0; i< allBoards.length; i++){
            console.log(JSON.stringify(allBoards[i]))
        }
    }else{
        console.log('allBoards is undefined')
    }
    

    useEffect(() => {
        dispatch(findAllBoards(1))
    }, [])
    
    return (<>
        <h2>게시판 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
     {allBoards && <StripedDataGrid
        rows={allBoards}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
    </>)
}

export default BoardListPage