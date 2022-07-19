import React from 'react';
import styled from "styled-components";

function Todo({ todo, togglecomplete, removeTodo}) {

    function handleCheckboxClick() {
        togglecomplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    const Button = styled.button`
        padding: 16px;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        outline: none;
        color: black;
        text-transform: capitalize;
        margin-top: 50px;
    `;

    const Input = styled.input`
        padding: 30px 40px 14px 16px;
        margin-top: 50px;
        border-radius: 4px 0 0 4px;
        border: 2px solid #5d0cff;
        outline: none;
        width: 100px;
        background: transparent;
        color: #fff;
    `;

    const LiItem = styled.li `
        margin-top: 50px;
        margin-right: 50px;
        margin-left: 50px;
    `;

    return (
        <div style={{ display: "flex"}}>
            <Input type="checkbox" onClick={handleCheckboxClick}/>
            <LiItem style={{ color: "white", textDecoration: todo.completed ? "line-through" : null}}>{todo.task}</LiItem>
            <Button onClick={handleRemoveClick}>X</Button>
        </div>
    );
}

export default Todo;