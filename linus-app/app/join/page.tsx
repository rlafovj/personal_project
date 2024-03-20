'use client'

import { useState } from "react"

export default function join(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const createUsername = (e:any)=>{
        setUsername(e.target.value)
    }
    const createPW = (e:any)=>{
        setPassword(e.target.value)
    }
    const submitClick = ()=>{
        alert('hi')
    }
    return<>
    <div>회원가입</div>
    <h3>ID</h3>
    <input type="text" onChange={createUsername}/>
    <h3>PASSWORD</h3>
    <input type="text" onChange={createPW}/><br />
    <button onClick={submitClick}>전송</button>
    </>
}