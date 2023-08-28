import Link from 'next/link'
import React from 'react'

function AboutCollege() {
    return (
        <>
            <div className='container'>
                <div>About College</div>
                <br />
                <br />
                <Link href="/about">Go To About Page</Link>
                <br />
                <br />
                <Link href="/">Go To Home Page</Link>
            </div>
        </>
    )
}

export default AboutCollege