'use client'
import { useState } from 'react'
import Link from 'next/link'
import { API_BASE_URL } from './config/constant';

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
        <h2>{API_BASE_URL}</h2>
      </main>
    </>
  )
}

