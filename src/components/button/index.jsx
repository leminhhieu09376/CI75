import React from 'react'
import styled from 'styled-components'
const Button = ({ text, overwrite = undefined, onClick }) => {
    return (
        <SButton className={overwrite && overwrite} onClick={onClick}>{text}</SButton>
    )
}

export default Button

const SButton = styled.button`
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
color: white;
background-color: green;
margin: 0 auto;
margin-top: 10px;
display: block;
`;