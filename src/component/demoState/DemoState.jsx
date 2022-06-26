import React, { useState } from 'react'
import "./DemoState.css"

const DemoState = () => {
    const denGiaoThong = ["red", "yellow", "green"]
    const [color, setColor] = useState(0)
    const changeColor = () => {
        setColor(color == 2 ? 0 : color + 1)
    }
    return (
        <div>
            {
                denGiaoThong.map((value, index) => {
                    return (
                        <div key={index} className={`mau ${index == color ? value : null}`} ></div>
                    )

                })
            }
            <button onClick={changeColor}>Click me</button>
        </div>
    )
}

export default DemoState