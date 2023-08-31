import React from 'react'
import getUsers from '../../../../services/getUsers'

async function UserDetail(props) {
    const getUserList = getUsers();
    const { users } = await getUserList;
    const currentId = props.params.userId
    const userData = users[currentId - 1]

    return (
        <>
            <div className='heading'>User Detail</div>
            <div className='userDeatil'>
                <p><strong>Name:</strong> {userData.firstName}  {userData.maidenName} {userData.lastName}</p>
                <p><strong>Age:</strong> {userData.age}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
            </div>
        </>
    )
}

export default UserDetail