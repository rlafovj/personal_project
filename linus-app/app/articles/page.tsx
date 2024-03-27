'use client'
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const SERVER = 'http://localhost:8080';

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
    const url = `${SERVER}/api/articles`
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
         Authorization: `Bearer blah ~` ,
        "Access-Control-Allow-Origin": "*",
    }}

useEffect(()=>{
    axios.get(url, config)
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
        <h2>게시판</h2>
        <table>
        <thead>
            <tr>
        <th>title</th>
        <th>content</th>
        <th>writer</th>
        <th>registerDate</th>
        </tr>
        </thead>
        <tbody>
            {articles.map((v:IArticle)=>(
                <tr key={v.id}>
                <td>{v.title}</td>
                <td>{v.content}</td>
                <td>{v.writer}</td>
                <td>{v.registerDate}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </>)
}