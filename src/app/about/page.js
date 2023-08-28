import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <>
            <div>About Page</div>
            <br />
            <br />
            <Link href="/">Go to home page</Link>
            <br />
            <br />
            <Link href="/about/aboutstudent"> Go To About Student Page</Link>
            <br />
            <br />
            <Link href="/about/aboutcollege"> Go To About College Page</Link>
        </>
    )
}

export default About