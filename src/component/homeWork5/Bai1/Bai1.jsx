import React, { useEffect, useState } from 'react'
import "./Bai1.css"


const Bai1 = () => {
    /* Cach 1 :*/
    const [count, setCount] = useState([0])
    if (count.length < 6) {
        setCount([...count, count[count.length - 1] + 1])
    }
    /* Cach 2 :*/
    // let count = [0, 1, 2, 3, 4, 5]

    return (
        <div className='divFather'>
            {

                count.map((value, index) => {
                    return <div key={index} className={`div ${value % 2 == 0 ? "circle" : "square"}`}>{value}</div>
                })
            }

        </div>
    )
}

export default Bai1