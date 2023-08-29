'use client'
import { useEffect, useState } from 'react'

function ProductList() {
    const [product, setProduct] = useState([])

    const fetchData = async () => {
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json()
        setProduct(data.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <h1>Product List</h1>
            </div>
            {product?.map((p) => {
              return  <div>
                    <h1>Name : {p.title}</h1>
                    <p>Description: {p.description}</p>
                    <p>Price: <span style={{ color: "green", fontWeight: "700" }}> {p.price} $</span></p>
                </div>
            })}

        </>
    )
}

export default ProductList