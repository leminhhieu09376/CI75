import React, { useState } from 'react'
import { SSignIn } from './style'
import { Link, useNavigate, useRoutes } from 'react-router-dom'
import Input from '../../components/input'
import Button from '../../components/button'
import { toast } from 'react-toastify'
const SignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
        const findUser = users.find(u => u.username === user.username && u.password === user.password)
        if (findUser === undefined) {
            toast.error("May be your account or password wrong")
            return
        } else {
            toast.success(`Welcome ${findUser.username}`)
            localStorage.setItem('currentUser', JSON.stringify(findUser))
            navigate("../", { replace: true })
        }

    }
    return (
        <SSignIn>
            <form onSubmit={handleSubmit}>
                <h1 className="title">SIGNIN FORM</h1>
                <div className='form-content'>
                    <Input label="User name" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                    <Input type="password" label="Password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />

                </div>
                <Link to='/sign-up'>Don't have account? Register now!!</Link>
                <Button text="SIGN IN" />
            </form>
        </SSignIn>
    )
}

export default SignIn