async function getProducts() {
    let data = await fetch("http://localhost:3000/api/products")
    data = await data.json()
    console.log()
    return data.result
}

async function page() {
    const products = await getProducts()

    return (
        <>
            <div className='heading'>Product List</div>
            {
                products.map((p) => {
                    return <div className='userDeatil'>
                        <p><strong>Name: </strong>{p.name}</p>
                        <p><strong>Price: </strong>{p.price}</p>
                        <p><strong>Company: </strong>{p.company}</p>
                        <p><strong>Color: </strong>{p.color}</p>
                    </div>
                })
            }   
        </>
    )
}

export default page