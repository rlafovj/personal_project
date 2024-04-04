'use client'

import UsersColumns from "@/app/components/users/column";
import { IUser } from "@/redux/features/users/user.model";
import { getAllUsers } from "@/redux/features/users/user.service";
import { AllUsers } from "@/redux/features/users/user.slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserListPage : NextPage = () => {
    const [pageSize, setPageSize] = useState(5);
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
    
        const rows = [ 
            { id: 1, username: "Snow", name: "Jon", phone: 35 },
            { id: 2, username: "Lannister", name: "Cersei", phone: 42 },
            { id: 3, username: "Lannister", name: "Jaime", phone: 45 },
            { id: 4, username: "Stark", name: "Arya", phone: 16 },
            { id: 5, username: "Targaryen", name: "Daenerys", phone: null },
            { id: 6, username: "Melisandre", name: null, phone: 150 },
            { id: 7, username: "Clifford", name: "Ferrara", phone: 44 },
            { id: 8, username: "Frances", name: "Rossini", phone: 36 },
            { id: 9, username: "Roxie", name: "Harvey", phone: 65 },
          ];

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

        <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={UsersColumns()}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
    </>)
}

export default UserListPage