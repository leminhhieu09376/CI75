import React from 'react'
import { SAddTodo } from './style'
import Input from '../../component/input'
import Button from '../../component/button'

const AddToDo = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <SAddTodo>
            <form onSubmit={handleSubmit}>
                <h2>New Event</h2>
                <Input type='date' placeholder="Date" />
                <Input placeholder="Todo..." />
                <Input placeholder="Location" />
                <Input placeholder="Time" />
                <Button text="ADD TO SCHEDULE" />
            </form>
        </SAddTodo>
    )
}

export default AddToDo