import React from 'react'
import styled from 'styled-components'
const Input = ({ placeholder, type = "text", onChange, className }) => {
    return (
        <SInput>
            <input className={className} type={type} placeholder={placeholder} onChange={onChange} />
        </SInput>
    )
}

export default Input

const SInput = styled.div`
display: flex;
flex-direction: column;
padding: 5px;

border-bottom: 1px solid #e0d3d3;
margin-top: 20px;
input{
    border: none;
    &:focus{
        outline: none;
    }
    &::placeholder {
        color: black;
    }
    padding: 8px;
     background-color: #00B4FE;
    color: white;

}

`;