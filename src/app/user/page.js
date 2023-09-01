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
                        <Link href={`/user/${u.id}`}>{u.name}</Link> <a href={`/user/${u.id}/update`}>Edit</a>
                    </div>
                })
            }
        </>
    )
}

export default page