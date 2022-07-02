import React, { useState } from 'react'
import TodoList from './TodoList'
import { AiFillBell } from "react-icons/ai"
import { RiTodoFill } from "react-icons/ri"
import "./Ex2.css"

const Ex2 = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState(["yeu em be nhat", "co vo xinh dep nhat vu chu"])

    const handleChangeInput = (e) => {
        setInput(e.target.value)
        console.log(e.target)

    }
    const getList = (e) => {
        e.preventDefault()
        setList([...list, input])
        setInput("")

    }

    return (
        <div className='ex2'>
            <h2 className='title'>Todo List</h2>
            <input type="text" className='addInput' onChange={handleChangeInput} value={input} placeholder="Task..."></input>
            <button type='submit' className='addBtn' onClick={getList}>Add</button>

            <TodoList list={list} />

        </div>
    )
}

export default Ex2