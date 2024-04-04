'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button, Input} from '@mui/material'
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import MuiDemoRows from "@/app/components/rows/mui-demo-rows";
import MuiDemoColumns from "@/app/components/demos/mui-demo-columns";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { IArticle } from "@/redux/features/articles/article.model";
import Columns from "@/app/components/articles/columns";

// const Article = (v: IArticle)=>
//     (
        // <tr key={v.id}>
        //     <td>{v.title}</td>
        //     <td>{v.content}</td>
        //     <td>{v.writer}</td>
        //     <td>{v.registerDate}</td>
        // </tr>
//     )


const ArticlesPage : NextPage = ({data}:any) => {
    const router = useRouter();
    const dispatch = useDispatch()
    // const [articles, setArticles] = useState([]) //state는 redux에서 처리했기 때문에 react에서 useState할 필요가 없음
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
      console.log('allArticles is not undefined')
      
      console.log('length is '+ allArticles.length)
      for(let i=0; i< allArticles.length; i++){
          console.log(JSON.stringify(allArticles[i]))
      }
  }else{
      console.log('allArticles is undefined')
  }

  useEffect(()=>{
    dispatch(fetchAllArticles())
  }, [])


    // const article = [
    //     {id : 1, title : '', content : '', writer : '', registerDate : ''}    
    // ]

    // const articleList = article.map((v) => (<Article key={v.id}{...v}/>))

    return (<>
        <h2>개인페이지 Article</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
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
      />
    </Box>
    </>)
}

export default ArticlesPage