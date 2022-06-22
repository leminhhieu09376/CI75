import React, { useEffect, useState } from "react";
import "./Exercise2.css"
import RenderEx2 from "./RenderEx2";

export const Exercise2 = () => {

    const [products, setProduct] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('https://fakestoreapi.com/products')
            const responseJSON = await response.json()
            setProduct(responseJSON)

        }
        fetchProducts()

    }, [])
    return (
        <div className="Exercise2">
            <RenderEx2 products={products} />
        </div>
    )
}