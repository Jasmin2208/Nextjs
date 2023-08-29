'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import custom from './custom.module.css'
import other from './other.module.css'
import outside from './style/outside.module.css'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("Jasmin")
  const [color, setColor] = useState("green")

  const handleData = () => {
    setName("Vraj")
  }

  const navigate = (path) => {
    return router.push(path)
  }
  return (
    <>
      <main>
        <User name={name} color={color}/>
        <h1 className={custom.main}>My Name Is {name}</h1>
        <Link href="/login" className={other.main}>Go to Link Page</Link>
        <br />
        <br />
        <Link href="/productlist" className={other.main}>Go to Product List Page</Link>
        <br />
        <br />
        <Link href="/userlist" >Go to User List Page</Link>
        <br />
        <br />
        <Link href="/about" className={outside.main}>Go to About Page</Link>
        <br />
        <br />
        <button onClick={() => navigate("/login")}>Go to Link Page</button>
        <br />
        <br />
        <button onClick={() => navigate("/about")}>Go to About Page</button>
        <br />
        <br />
        <button onClick={() => setColor("orange")}>Change Color</button>
        <br />
        <br />
        <button onClick={handleData}>Click Here</button>
      </main>
    </>
  )
}

const User = ({ color, name }) => {
  return (
    <div>
      <h1 className={color === "green" ? custom.main : other.main}>Hello my name is {name}</h1>
    </div>
  )
}
