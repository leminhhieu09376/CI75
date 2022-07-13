import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header'
const Home = () => {
    let navigate = useNavigate()
    useEffect(() => {
        let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        if (!currentUser) {
            navigate("../sign-in", { replace: true })
        }
    }, [])
    return (
        <div>
            <Header />
        </div>
    )
}

export default Home