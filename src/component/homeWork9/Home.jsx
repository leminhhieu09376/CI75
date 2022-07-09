import React from 'react'

const Home = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <p>Home page</p>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home