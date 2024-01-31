import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ReadUsers = () => {
    const getAllUsersUrl = 'http://localhost:8080/v1/user/all'
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get(`${getAllUsersUrl}`)
        setUsers(res.data);
    }

    useEffect(() => {
        fetchUsers()
    }, [])


  return (
    <div>
        <h3 className='text-center m-2 font-bold text-2xl'>Users</h3>
       {users.map((user) =>  (
        <>
            <div className='m-4 flex rounded  justify-center shadow-lg w-56 border-2 border-l-yellow-900'>
                <div className='flex flex-col p-1'>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            </div>
        </>
       )
       
        )}
    </div>
  )
}

export default ReadUsers