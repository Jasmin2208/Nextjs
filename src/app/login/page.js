import Link from 'next/link'
import React from 'react'
import './login.css'

function Login() {
    return (
        <>
            <div className='heading'>Login</div>
            <Link href="/">Go to home page</Link>
        </>
    )
}

export default Login