import React from 'react'
import styled from 'styled-components'
const Input = ({ label, value, onChange, type = "text" }) => {
    return (
        <SInput>
            <span className="label">{label}</span>
            <input type={type} value={value} onChange={onChange}></input>
        </SInput>
    )
}

export default Input

const SInput = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
border-radius: 4px;
border: 1px solid gray;
margin-top: 20px;
.label{
    color: brown;
}
input{
    border: none;
    height: 30px;
    font-size: 17px;
    &:focus{
        outline: none;
    }

}
input[type='password']{
    font-size: 30px;
}
`