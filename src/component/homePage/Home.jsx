import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to="/docs">Docs</Link>
                        </li>
                        <li class="nav-item">

                            <Link className='nav-link' to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <p>Home</p>
                </div>
            </div>
        </div>

    )
}

export default Home