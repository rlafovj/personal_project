'use client'

import { findAllBoards } from "@/redux/features/boards/board.service"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function BoardDetailPage (props:any){

    const dispatch = useDispatch

    useEffect(()=>{
        dispatch(findAllBoards(props.params.id))
    }, [])

    return(<>

    {props.params.id}번 게시판 상세
    <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{props.params.id}</Typography>
    <span>게시판이름 : </span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}></Typography>
    <span>게시판타입 : </span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}></Typography>
    <span>등록일 : </span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}></Typography>
    <span>수정일 : </span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}></Typography>


    </>)
}