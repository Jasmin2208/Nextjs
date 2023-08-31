import Users from '@/components/user'
import React from 'react'
import getUsers from '../../../services/getUsers'
import Link from 'next/link';

async function User() {
    const getUserList = getUsers();
    const { users } = await getUserList;
    console.log(users);
    return (
        <>
            <div className='heading'>User</div>
            <div className='heading'><Users /></div>
            <div>
                {
                    users.map((user) => {
                        return <div key={user.id}>
                                    <Link href={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link>
                               </div>
                    })
                }
            </div>
        </>
    )
}

export default User