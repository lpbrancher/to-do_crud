import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './Todo.module.css'
import { Link } from "react-router-dom";

export default function Todo(todo) {
    const [done, setDone] = useState(todo.todo.done)
    const [todoText, setTodoText] = useState(todo.todo.todoText)

    function checkDone(id, done) {
        setDone(done)
        const data = {
            todoText,
            done
        };
        axios.put(`http://localhost:5555/todos/${id}`, data)
            .then(() => {
                console.log('todo updated!')
            })
            .catch((error) => {
                alert('Oops! An error happened. Check the console!')
                console.log(error)
            })
    }

    console.log(todo)
    return (
        <div className={styles.todo}>
            <div className={styles.todo_info}>
                <input className={styles.checkbox} type="checkbox" name="" id="" onChange={function () {
                    console.log(done)
                    done ? (checkDone(todo.todo._id, false)) : (checkDone(todo.todo._id, true))

                }
                } checked={done ? 'checked' : ''} />
                <p>{todoText}</p>
            </div>
            <div className={styles.todo_btns}>
                <button className="todo-btn">Edit</button>
                <Link className="todo-btn" to={`/todos/delete/${todo.todo._id}`}>
                    Delete
                </Link>
            </div>
        </div>
    )
}
