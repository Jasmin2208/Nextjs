import React from 'react'

const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}

async function UserList() {
    let users = await fetchData();

    return (
        <>
            <div>User List</div>
            {users.map((u) => {
                return <div style={{ marginBottom: "15px", backgroundColor: "gray", color:"white", padding:"5px" }}>
                    <h4>Name: {u.firstName} {u.lastName}</h4>
                    <h5>Age: {u.age}</h5>
                    <h5>Gender: {u.gender}</h5>
                    <h5>Email: {u.email}</h5>
                    <h5>Phone: {u.phone}</h5>

                </div>
            })}
        </>
    )
}

export default UserList