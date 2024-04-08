"use client";
import axios from "axios";
import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { NextPage } from "next";
// import '../style.css';


const JoinPage : NextPage = () => {
  const [username, setUsername] = useState("");
  const[password,setPassword]=useState("")
  const[name,setName]=useState("");
  const[phone,setPhone]=useState("");
  const[address,setAddress]=useState("");
  const[job,setjob]=useState("");
  const handleUsername = (e : any)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e : any)=>{
    setPassword(e.target.value)
  }
  const handleName = (e : any)=>{
    setName(e.target.value)
  }
  const handlePhone = (e : any)=>{
    setPhone(e.target.value)
  }
  const handleAddress = (e : any)=>{
    setAddress(e.target.value)
  }
  const handleJob = (e : any)=>{
    setjob(e.target.value)
  }
  const router = useRouter();

  const handleSubmit = ()=>{
    alert("리퀘스트가 가져가는 아이디 : " + username);
    axios.post(`${API.USER}/join`, {"users" : { username, password, name, phone, address, job }}, AxiosConfig()).then(res => {
      alert("리스판스가 가져온 정보 : " + JSON.stringify(res.data))
      router.push('./login');
    })
  }

  const defaultCheck = ""

  return (
    <>
    <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label htmlFor="username"><b>ID</b></label>
    <input type="text" placeholder="Enter username" name="username" required onChange={handleUsername}/>
    <br /><hr />
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={handlePassword}/>
    <br /><hr />
    <label htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter name" name="name" required onChange={handleName}/>
    <br /><hr />
    <label htmlFor="phone"><b>Phone</b></label>
    <input type="text" placeholder="Enter phone" name="phone" required onChange={handlePhone}/>
    <br /><hr />
    <label htmlFor="address"><b>Address</b></label>
    <input type="text" placeholder="Enter address" name="address" required onChange={handleAddress}/>
    <br /><hr />
    <label htmlFor="job"><b>Job</b></label>
    <input type="text" placeholder="Enter job" name="job" required onChange={handleJob}/>
    <br /><hr />

    <label>
      <input type="checkbox" name="remember" style={{marginBottom : '15px'}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color : 'dodgerblue'}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
    </div>
    </div>
    </>
  );
}

export default JoinPage