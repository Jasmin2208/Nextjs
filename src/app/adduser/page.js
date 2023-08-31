'use client'
import React, { useState } from 'react'

function page() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  const hanldeSubmit = async () => {
    let data = await fetch("http://localhost:3000/api/user", {
      method: "Post",
      body: JSON.stringify({ name, age, gender })
    })
    data = await data.json()
    if (data.error) {
      alert(data.result)
    } else {
      alert(data.result)
    }
  }

  return (
    <>
      <div className='heading'>Add User</div>
      <div className='add-user'>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter User Name' className='inputFeild' />
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' className='inputFeild' />
        <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Enter Gender' className='inputFeild' />
        <button className='btn btn-success' type='submit' onClick={hanldeSubmit}>Add User</button>
      </div>
    </>
  )
}

export default page