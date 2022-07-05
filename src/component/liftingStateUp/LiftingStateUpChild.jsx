import React, { useState } from 'react'

const LiftingStateUpChild = (props) => {
    const [todos, setTodos] = useState("")
    const todoValue = () => {
        props.newTodos(todos)
    }
    return (
        <div>
            <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)}></input>
            <button onClick={todoValue} >Click</button>
        </div>
    )
}

export default LiftingStateUpChild