'use client'
import { useState } from "react"
import axios from "axios"
const SERVER = 'http://localhost:8080';
export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e:any)=>{
        setUsername(e.target.value)
    }
    const handlePW = (e:any)=>{
        setPassword(e.target.value)
    }
    const submitClick = ()=>{
        alert('리퀘스트가 가져가는 ID : '+username)
        const url = `${SERVER}/login`
        const data = {'username': username, 'password':password}
        const config = {
          headers:{
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
             Authorization: `Bearer blah ~` ,
            "Access-Control-Allow-Origin": "*",
        }}
        axios.post(url, data, config)
        .then((res)=>{
          alert("리스폰스가 가져온 ID : "+JSON.stringify(res.data.username))
          alert("리스폰스가 가져온 PW : "+JSON.stringify(res.data.password))
        }
        )
    }

    return <>
    <div>로그인</div>
    <h3>ID</h3>
    <input type="text" onChange={handleUsername}/>
    <h3>PASSWORD</h3>
    <input type="text" onChange={handlePW}/><br />
    <button onClick={submitClick}>전송</button>

    </>
}