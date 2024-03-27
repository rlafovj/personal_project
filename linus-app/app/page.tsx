'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import './globals.css'
const SERVER = 'http://localhost:8080';
export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e:any)=>{
    setName(e.target.value)
  }
  const handleClick = ()=>{
    alert('리퀘스트가 가져가는 이름 : '+name)
    const url = `${SERVER}/name`
    const data = {'name': name}
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
         Authorization: `Bearer blah ~` ,
        "Access-Control-Allow-Origin": "*",
    }}
    axios.post(url, data, config)
    .then((res)=>{
      alert("리스폰스가 가져온 이름 : "+JSON.stringify(res.data))
    }
    )
  }
  return<div className="text-center">
  <div>Welcome</div><br />
  <h3>이름을 입력하세요</h3><br />
  <input type="text" onChange={handleChange} /><br />
  <button onClick={handleClick}>전송</button><br /><br />
  <Link href={'/login'}>로그인</Link><br />
  <Link href={"/join"}>회원가입</Link><br />
  <Link href={'/mui-demo'}>MUI 데모</Link><br />

  </div>
}
