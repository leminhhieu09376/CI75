import React, { useState } from 'react'
import "./TrafficLight.css"

const lights = ["red", "yellow", "green"]
const TrafficLight = () => {

    const [color, setColor] = useState(0)
    const changeColor = () => {
        setColor(color == 2 ? 0 : color + 1)

    }
    return (
        <div>
            {
                lights.map((element, index) => (
                    <div key={index} className={`div ${index === color && element}`}>

                    </div>

                ))

            }
            <button onClick={changeColor}>Next</button>
        </div>
    )
}

export default TrafficLight