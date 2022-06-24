import React, { useState } from 'react'

const DemoState = () => {
    const [number, setNumber] = useState(0)
    const handleDecrease = () => {
        setNumber(number - 1)
    }
    const handleIncrease = () => {
        setNumber((pre) => pre + 1
        )
        // setNumber(number + 1)
    }
    console.log("re-render")
    return (
        <div>

            <button onClick={handleDecrease}>Decrease</button>
            <span>{number}</span>
            <button onClick={handleIncrease}>Increase</button>

        </div>
    )
}

export default DemoState