import React, { useState } from 'react'
import "./TodoItem.css"

const TodoItem = (props) => {
    const [check, setCheck] = useState(false)
    const delTodo = (e) => {
        e.target.parentElement.remove()
    }
    return (
        <div className='todoItem'>
            <div className='row'>

                <input type="checkbox" className='checkBox' checked={check} onChange={(e) => {
                    setCheck(!check)
                }}></input>
                <div className={`todoValue ${check == true ? "done" : null}`}>{props.todo}</div>
                <button className='btnDel' onClick={delTodo}>X</button>

            </div>
        </div>
    )
}

export default TodoItem