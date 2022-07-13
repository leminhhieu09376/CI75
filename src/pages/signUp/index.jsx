import React, { useState } from 'react'
import { SSignUp } from './style'
import Input from '../../components/input'
import Button from '../../components/button'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const initialState = {
        username: "",
        password: "",
        confirmation: "",
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.password !== user.confirmation) {
            toast.error("Please double check password!!")
            return
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        localStorage.setItem('users', JSON.stringify([...users, user]))
        toast.success("Register success")
        setUser(initialState)
    }

    const [user, setUser] = useState(initialState)

    return (
        <SSignUp>
            <form onSubmit={handleSubmit}>
                <h1 className="title">REGISTER FORM</h1>
                <div className='form-content'>
                    <Input label="User name" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                    <Input type="password" label="Password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                    <Input type="password" label="Confirm password" value={user.confirmation} onChange={e => setUser({ ...user, confirmation: e.target.value })} />
                </div>
                <Link to='/sign-in'>Already account ? Sign in now</Link>
                <Button text="Register" />
            </form>
        </SSignUp>
    )
}

export default SignUp