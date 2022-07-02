import React from 'react'
import TodoItem from "./TodoItem"
import "./TodoList.css"
const TodoList = (props) => {

    return (
        <div className='todoList'>

            {
                props.list.map((value, index) => {
                    return <TodoItem todo={value} key={index} />

                })
            }

        </div>

    )
}

export default TodoList