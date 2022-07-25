import React, { useState } from "react";
import styled from "styled-components";


function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
}

function handleSubmit(e) {
    e.preventDefault();
    if(todo.task.trim()) {
        addTodo({ ...todo, id: Math.floor(Math.random() * 10000),});
        //reset task
        setTodo({ ...todo, task: ""});
    }
}

const Input = styled.input`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
`;

const Button = styled.button`
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
        // background: linear-gradient(
        // 90deg,
        // rgba(93, 12, 255, 1) 0%,
        // rgba(155, 0, 250, 1) 100%
        // );
    color: black;
    text-transform: capitalize;
`;

return (
        <form onSubmit={handleSubmit}>
            <Input name="task" type="text" value={todo.task} onChange={handleTaskInputChange} />
            <Button type="submit">submit</Button>
        </form>
    );
}

export default TodoForm;