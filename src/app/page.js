'use client'
import { useState } from 'react'
import styles from './page.module.css'


export default function Home() {
  const [name, setName] = useState("Jasmin")
  const handleData = () => {
    setName("Vraj")
  }
  return (
    <>
      <main className={styles.main}>
        <User name={name} />
        <h1>My Name Is {name}</h1>
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
