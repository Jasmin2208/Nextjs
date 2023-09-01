import Link from 'next/link'
import React from 'react'
import DeleteUser from '../../utils/DeleteUser'

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/user")
    data = data.json()
    return data
}

async function page() {
    const user = await getUsers()
    return (
        <>
            <div className='heading'>User List</div>

            {
                user.map((u) => {
                    return <div key={u.id} className='list'>
                        <Link href={`/user/${u.id}`}>{u.name}</Link> <a href={`/user/${u.id}/update`} className='span'>Edit</a><span className='span'><DeleteUser id={u.id} /></span>
                    </div>
                })
            }
        </>
    )
}

export default page