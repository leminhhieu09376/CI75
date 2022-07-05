import React, { useState } from 'react'
import LiftingStateUpChild from './LiftingStateUpChild'

const LiftingStateUpDad = () => {

    const [todos, setTodos] = useState([
        {
            name: "hiu",
        }
    ])
    const newTodos = (value) => {
        const newTodos = {
            name: value,
        }
        setTodos(newTodos)
    }
    return (
        <div>
            <LiftingStateUpChild newTodos={newTodos} />
            <p>{todos.name}</p>
        </div>
    )
}

export default LiftingStateUpDad