import React, { useState } from 'react'
import "./Bai3.css"
const Bai3 = () => {
    const [state, setState] = useState("square3")
    const changeCircle = () => {
        setState("circle3")


    }
    const changeSquare = () => {
        setState("square3")

    }
    return (
        <div className='bai3'>

            {
                state == "square3" ?
                    <div>
                        <div className={` ${state}`}></div>
                        <button onClick={changeCircle}>Change</button>
                    </div> :
                    <div>
                        <div className={` ${state}`}></div>
                        <button onClick={changeSquare}>Change</button>
                    </div>
            }
        </div >
    )
}

export default Bai3