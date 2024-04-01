'use client'

import { IUser } from "@/redux/features/users/user.model";
import { getAllUsers } from "@/redux/features/users/user.service";
import { AllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserListPage : NextPage = () => {
    const dispatch = useDispatch();
    const allUsers: [] = useSelector(AllUsers)

    if(allUsers !== undefined){
        console.log('Users is not undefined')
        
        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

    useEffect(()=>{
        dispatch(getAllUsers())
    }, [])

    return (<>
    <h2>회원 목록</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                {allUsers?.map((props: IUser) => (
                    <tr key={props.id}>
                        <td>{props.username}</td>
                        <td>{props.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}

export default UserListPage