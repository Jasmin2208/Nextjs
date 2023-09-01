'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

async function getProducts() {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    return data.result;
}

function Page() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const newProducts = await getProducts();
        console.log(newProducts);
        setProducts(newProducts);
    };

    const handleDelete = async (id) => {
        let data = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
        })
        data = await data.json()
        if (data.error) {
            alert(data.result)
        } else {
            alert(data.result)
            fetchProducts()
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className='heading'>Product List</div>
            {products.map((p) => (
                <div className='userDeatil' key={p._id}>
                    <p><strong>Name: </strong>{p.name}</p>
                    <p><strong>Price: </strong>{p.price}</p>
                    <p><strong>Company: </strong>{p.company}</p>
                    <p><strong>Color: </strong>{p.color}</p>
                    <Link href={`products/${p._id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(p._id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default Page;
