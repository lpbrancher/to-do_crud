import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import styles from './CreateTodo.module.css'

export default function CreateTodo() {
    const [loading, setLoading] = useState(false)
    const [todoText, setTodoText] = useState('')
    const navigate = useNavigate();
    const handleCreateTodo = () => {
        const data = {
            todoText
        }
        setLoading(true)
        axios.post('http://localhost:5555/todos', data)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert('Oops! An error happened. Check the console!')
                console.log(error)
            })
    }
    return (
        <div>

            <h1>Create a to-do</h1>
            {loading ? <Loader /> : ''}
            <div>
                <label htmlFor="">What do you need to do?</label><br />
                <input className={styles.input} type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
            </div>
            <div className="flex">
                <Link className='ui-btn' to='/'>Go back</Link>
                <button className="ui-btn" onClick={handleCreateTodo}>Save to-do</button>
            </div>

        </div>
    )
}
