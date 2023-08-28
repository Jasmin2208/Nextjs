import Link from 'next/link'
import React from 'react'

function AboutStudent() {
  return (
    <>
      <div>About Student</div>
      <br />
      <br />
      <Link href="/about">Go To About Page</Link>
      <br />
      <br />
      <Link href="/">Go To Home Page</Link>
    </>
  )
}

export default AboutStudent