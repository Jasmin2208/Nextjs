import React from 'react'
import User from './user'
import outside from '../style/outside.module.css'


const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}

async function UserList() {
    let users = await fetchData();

    return (
        <>
            <div className='heading'>User List</div>
            {users.map((u) => {
                return <div style={{ marginBottom: "15px", backgroundColor: "orange", color: "black", padding: "5px", width:"30rem", borderRadius:"15px" }}>
                    <h4>Name: {u.firstName} {u.lastName}</h4>
                    <h5>Age: {u.age}</h5>
                    <h5>Gender: {u.gender}</h5>
                    <h5>Email: {u.email}</h5>
                    <h5 className={outside.main}>Phone: {u.phone}</h5>
                    <User name={`${u.firstName} ${u.lastName}`} />
                </div>
            })}
        </>
    )
}

export default UserList