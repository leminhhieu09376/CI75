import React, { useState } from 'react'
import "./Bai2.css"

const Bai2 = () => {
    let index = []
    for (let i = 0; i < 7; i++) {
        index.push(i)
    }

    const [onOff, setOnOff] = useState(0)
    const nextColor = () => {
        setOnOff(onOff == 6 ? 0 : onOff + 1)

    }
    return (
        <div>

            {
                index.map((value, index) => {
                    return <div key={index} className={`div2 ${onOff == index ? "on" : "off"}`}>
                        {value}
                    </div>
                })
            }

            <button onClick={nextColor}>Next</button>
        </div>

    )
}

export default Bai2