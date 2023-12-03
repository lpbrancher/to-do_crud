// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Todo from "./Todo";

export default function TodoList({ todos }) {

    
    return (
        <section>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <Todo todo={todo} />
                </div>
            ))}
        </section>
    )
}
