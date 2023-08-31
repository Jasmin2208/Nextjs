import Link from 'next/link'
import React from 'react'

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/user")
    data = data.json()
    return data
}

async function page() {
    const user = await getUsers()
    console.log("user", user)
    return (
        <>
            <div className='heading'>User List</div>

            {
                user.map((u) => {
                    return <div key={u.id}>
                        <Link href={`user/${u.id}`}>{u.name}</Link>
                    </div>
                    // return <div className='userDeatil'>
                    //     <p><strong>Name: </strong>{u.name}</p>
                    //     <p><strong>Age: </strong>{u.age}</p>
                    //     <p><strong>Gender: </strong>{u.gender}</p>
                    // </div>
                })
            }
        </>
    )
}

export default page