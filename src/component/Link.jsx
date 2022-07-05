import React from 'react'
import { Link } from 'react-router-dom'
const Link = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/docs">Docs</Link>
        </div>
    )
}

export default Link