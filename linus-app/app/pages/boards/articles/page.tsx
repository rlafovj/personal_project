'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button, Input} from '@mui/material'
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";
import MuiDemoRows from "@/app/organisms/rows/mui-demo-rows";
import MuiDemoColumns from "@/app/organisms/columns/mui-demo-columns";

interface IArticle{
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

// const Article = (v: IArticle)=>
//     (
        // <tr key={v.id}>
        //     <td>{v.title}</td>
        //     <td>{v.content}</td>
        //     <td>{v.writer}</td>
        //     <td>{v.registerDate}</td>
        // </tr>
//     )


export default function Articles(){
    const router = useRouter();
    const [articles, setArticles] = useState([])

useEffect(()=>{
    axios.get(`${API.SERVER}/articles`, AxiosConfig())
    .then(res =>{
        const message = res.data.message
      console.log((message))
      if(message === 'SUCCESS'){
        console.log("게시글이 있습니다")
        setArticles(res.data.result)
      }else if(message === 'FAIL'){
        console.log("게시글이 없습니다")
      }else console.log("지정되지 않은 값")
      
    })
}, [])


    const article = [
        {id : 1, title : '', content : '', writer : '', registerDate : ''}    
    ]

    // const articleList = article.map((v) => (<Article key={v.id}{...v}/>))

    return (<>
        <h2>게시글 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={MuiDemoRows()}
        columns={MuiDemoColumns()}
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
      />
    </Box>
    </>)
}