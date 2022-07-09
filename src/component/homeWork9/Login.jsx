import React, { useRef } from 'react'
import Home from './Home'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = () => {
        if (email.current.value == "abc@gmail.com" && password.current.value == "123456") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "123456")
        }
    }
    return (
        <div>
            {
                getEmail && getPassword ? <Home /> : <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" ref={email}></input>
                    </div>
                    <div>
                        <input type="password" ref={password}></input>
                    </div>
                    <button>Login</button>
                </form>
            }

        </div>
    )
}

export default Login