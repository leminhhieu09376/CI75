import React, { useState } from 'react'

const Input = () => {
    // const [input, setInput] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setPassword("")
        setUsername("")
    }
    return (
        // <input value={input} onChange={(x) => {
        //     setInput(x.target.value)


        // }}></input>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}></input>
            <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button>Click</button>
        </form>
    )
}

export default Input