'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
const SERVER = 'http://localhost:8080';

interface IArticle{
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const Article = (v: IArticle)=>{
    return(
        <tr key={v.id}>
            <td>{v.title}</td>
            <td>{v.content}</td>
            <td>{v.writer}</td>
            <td>{v.registerDate}</td>
        </tr>
    )
}

export default function Articles(){
    const router = useRouter();
    const url = `${SERVER}/articles`
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
         Authorization: `Bearer blah ~` ,
        "Access-Control-Allow-Origin": "*",
    }}
    axios.get(url, config)
    .then(res =>{
        const message = res.data.message
      alert((message))
      if(message === 'SUCCESS'){
       alert("게시글이 있습니다")
      }else if(message === 'FAIL'){
        alert("게시글이 없습니다")
      }else alert("지정되지 않은 값")
      
    })
    const article = [
        {id : 1, title : '', content : '', writer : '', registerDate : ''}    
    ]

    const articleList = article.map((v) => (<Article {...v}/>))

    return (<>
        <h2>게시판</h2>
        <table>
            <tr>
        <th>title</th>
        <th>content</th>
        <th>writer</th>
        <th>registerDate</th>
        </tr>
        <thead></thead>
        <tbody>
        {articleList}
        </tbody>
        </table>
    </>)
}