import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../button'
import { useNavigate } from "react-router-dom"

const Header = () => {

    let navigate = useNavigate()
    const [user, setUser] = useState(null)

    const handleLogOut = () => {
        localStorage.removeItem('currentUser')
        navigate("../sign-in", { replace: true })
    }
    useEffect(() => {
        const findUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        setUser(findUser)
    }, [])
    return (
        <SHeader>
            <div className="logo">LOGO</div>
            {user && <p className="name">Hello,{user.username}</p>}
            <div className="header-left">
                <Button overwrite='overWrite' text="Log out" onClick={handleLogOut} />
            </div>
        </SHeader>
    )
}

export default Header

const SHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
.header-left{
    .overWrite{
        background: red;
    }
}
`