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

export function generateMetadata() {
    return {
        title: "Login page",
        description: "This is login page"
    }
}

export default Login