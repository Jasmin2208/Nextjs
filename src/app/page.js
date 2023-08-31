'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  console.log(process.env.SERVER_PASSWORD);
  return (
    <>
      <main>
        <h1 className='heading'>Home Page</h1>
        {
          process.env.NODE_ENV == 'development' ?
            <h1>Development Mode</h1> :
            <h1>Production Mode</h1>
        }
      </main>
    </>
  )
}

