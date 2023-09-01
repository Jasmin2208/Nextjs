'use client'
import React, { useEffect, useState } from 'react'

function page({ params }) {
  const id = params.userId;
  console.log(id);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`)
    data = await data.json()
    return data[0]
  }

  useEffect(async () => {
    const data = await getUsers(id)
    setName(data.name)
    setAge(data.age)
    setGender(data.gender)
  }, [])

  const hanldeSubmit = async () => {
    let data = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
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
      <div className='heading'>Update User</div>
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