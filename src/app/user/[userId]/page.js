import React from 'react'

async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`)
    data = data.json()
    return data
}

async function page({ params }) {
    const user = await getUsers(params.userId)
    return (
        <>
            <div className='heading'>User Detail</div>
            <div className='userDeatil'>
                <p><strong>Name: </strong>{user[0].name}</p>
                <p><strong>Age: </strong>{user[0].age}</p>
                <p><strong>Gender: </strong>{user[0].gender}</p>
            </div>
        </>
    )
}

export default page