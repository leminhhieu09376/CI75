import React, { useEffect, useState } from 'react'

const Ex2 = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchAPIEx2 = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            setTodos(data)
        }
        fetchAPIEx2()
    }, [])
    return (
        <div>
            {
                todos.map((todo) => {
                    return <p key={todo.userId}>{todo.title}</p>
                })
            }
        </div>
    )
}

export default Ex2