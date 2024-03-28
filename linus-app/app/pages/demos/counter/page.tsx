'use client'

import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    const handlePlus = ()=>{
        setCount(count+1)
    }
    const handleMinus = ()=>{
        setCount(count-1)
    }


    return (<div className="text-center">
    <h1 className="text-8xl">Counter : {count}</h1>
    <Button onClick={handlePlus} className="text-8xl">+</Button><br />
    <Button onClick={handleMinus}className="text-8xl">-</Button>

    </div>)
}