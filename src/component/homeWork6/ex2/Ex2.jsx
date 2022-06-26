import React, { useState } from 'react'
import TodoList from './TodoList'
import "./Ex2.css"

const Ex2 = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const handleChangeInput = (e) => {
        setInput(e.target.value)

    }
    const getList = (e) => {
        e.preventDefault()
        setList([...list, input])
        setInput("")

    }

    return (
        <div className='ex2'>
            <h2 className='title'>Todo List</h2>
            <input type="text" className='addInput' onChange={handleChangeInput} value={input}></input>
            <button className='addBtn' onClick={getList}>Add</button>
            {/* {
                list.map((value, index) => {
                    return <TodoList itemList={value} key={index} />
                })
            } */}
            <TodoList list={list} />

        </div>
    )
}

export default Ex2