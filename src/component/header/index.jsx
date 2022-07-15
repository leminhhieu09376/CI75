import React from 'react'
import styled from 'styled-components'
import Input from '../input'
const Header = ({ className }) => {
    return (
        <SHeader>
            <div className={className}>
                <Input className="date" type='date' />
                <div className='day'>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                    <p>Sun</p>
                </div>
            </div>
        </SHeader>
    )
}

export default Header
const SHeader = styled.div`

border-bottom: 1px solid black;

width: 350px;
.day{
    display: flex;
    p{
        margin: 0 auto;
    }
    margin-bottom: 16px;
    
}


`;