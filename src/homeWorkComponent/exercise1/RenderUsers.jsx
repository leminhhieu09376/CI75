import React from 'react'
import "./RenderUsers.css"
const RenderUsers = (props) => {
    const { users } = props;
    return (
        <div className='div'>
            {users.map(user => (
                <div key={user.id} className='renderUser'>
                    <div className='divC' >Name: {user.name}</div>
                    <div className='divC'>Username: {user.username}</div>
                    <div className='divC' >Email: {user.email}</div>
                    <div className='divC' >Street: {user.address.street}</div>
                </div>
            ))}

        </div>
    )
}

export default RenderUsers