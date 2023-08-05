import React, { useEffect, useState } from 'react'

const UserApp = () => {
    const [users, setUsers] = useState([])

    const fecthUsers = async() =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)

        }catch(error){
            console.error(error);
        }
    }

    useEffect( ()=>{
        fecthUsers()
    }, [])

  return (
    <>
        <h2>Lista de Usuarios</h2>
        <ul>

            {users.map(user=> <li key={user.id}> {user.name}</li>)}
        </ul>
    </>
  )
}

export default UserApp