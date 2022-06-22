import React from 'react'
import "./RenderEx2.css"
const RenderEx2 = (props) => {
    return (
        <div className='renderEx2'>
            {
                props.products.map((product, index) => {
                    return (
                        <div className='productInfo' key={index}>
                            <div className='divBg'>
                                <img className='img' src={product.image} />
                            </div>
                            <p className='p'>Name: {product.title}</p>
                            <p className='p'>Category: {product.category}</p>
                            <p className='p'>Description: {product.description}</p>
                            <p className='p price'> {product.price} $</p>
                            <div className='bottom'>
                                <span className='buy'>Purchase</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RenderEx2