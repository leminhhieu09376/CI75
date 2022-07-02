import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [num, setNumer] = useState(1)

    useEffect(() => {
        console.log("useEffect")
    }, [num])
    const Add = () => {
        setNumer(num + 1)
    }
    return (
        <div>
            <input type="text" value={num} onChange={(e) => { setNumer(e.target.value) }}></input>
            <button onClick={Add}>Click</button>
        </div>
    )
}

export default UseEffect