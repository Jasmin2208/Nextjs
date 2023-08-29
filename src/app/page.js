'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("Jasmin")

  const handleData = () => {
    setName("Vraj")
  }

  const navigate = (path)=>{
    return router.push(path)
  }
  return (
    <>
      <main>
        <User name={name} />
        <h1>My Name Is {name}</h1>
        <Link href="/login">Go to Link Page</Link>
        <br />
        <br />
        <Link href="/productlist">Go to Product List Page</Link>
        <br />
        <br />
        <Link href="/userlist">Go to Product List Page</Link>
        <br />
        <br />
        <Link href="/about">Go to About Page</Link>
        <br />
        <br />
        <button onClick={() => navigate("/login")}>Go to Link Page</button>
        <br />
        <br />
        <button onClick={() => navigate("/about")}>Go to About Page</button>
        <br />
        <br />
        <button onClick={handleData}>Click Here</button>
      </main>
    </>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>Hello my name is {props.name}</h1>
    </div>
  )
}
