import React, { useState } from 'react'

const Ex1 = () => {
    const [value, setValue] = useState("")
    const [text, setText] = useState([])
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setText([...text, value + ","])
        setValue("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type='submit'>Click me</button>
            </form>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Ex1