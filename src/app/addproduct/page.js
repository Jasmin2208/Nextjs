'use client'
import React, { useState } from 'react'

function page() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")


    const hanldeSubmit = async () => {
        let data = await fetch("http://localhost:3000/api/products", {
            method: "Post",
            body: JSON.stringify({ name, price, company, color })
        })
        data = await data.json()
        if (data.error) {
            alert(data.result)
        } else {
            alert("Product Created Successfully !")
        }
    }

    return (
        <>
            <div className='heading'>Add Product</div>
            <div className='add-user'>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name' className='inputFeild' />
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price' className='inputFeild' />
                <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter Product Company' className='inputFeild' />
                <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter Product Colour' className='inputFeild' />
                <button className='btn btn-success' type='submit' onClick={hanldeSubmit}>Add User</button>
            </div>
        </>
    )
}

export default page