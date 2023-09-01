'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

function page({ params }) {
    console.log(params.product)
    const id = params.product;
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")

    async function getProduct(id) {
        let data = await fetch(`http://localhost:3000/api/products/${id}`)
        data = await data.json()
        return data
    }

    useEffect(async () => {
        const data = await getProduct(id)
        setName(data.name)
        setPrice(data.price)
        setCompany(data.company)
        setColor(data.color)
    }, [])

    const hanldeSubmit = async () => {
        let data = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, company, color })
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
            <div className='heading'>Update Product</div>
            <div className='add-user'>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name' className='inputFeild' />
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price' className='inputFeild' />
                <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter Product Company' className='inputFeild' />
                <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter Product Colour' className='inputFeild' />
                <button className='btn btn-success' type='submit' onClick={hanldeSubmit}>Save Changes</button>
                <Link href='/products'>
                    <button className='btn'>Go To Product List</button>
                </Link>
            </div>
        </>
    )
}

export default page