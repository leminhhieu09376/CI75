import React, { useState } from 'react'

const E1 = () => {
    const [products, setProducts] = useState([])
    const fetchAPIEx1 = async () => {

        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()

        setProducts(data)
    }
    console.log(products)
    return (
        <div>
            <button onClick={fetchAPIEx1}>Click</button>
            {
                products.map((product) => {
                    return <div key={product.id}>{product.title}</div>
                })
            }
        </div>
    )
}

export default E1