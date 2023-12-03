import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import TodoList from '../components/TodoList';
import { Link } from 'react-router-dom';

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5555/todos')
            .then((response) => {
                setTodos(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    
    return (
        <section>
            <h1>To-do list</h1>
            {loading ? <Loader /> : <TodoList todos={todos} />}
            <Link className='ui-btn' to='/create'>Create a to-do</Link>
        </section>
    )
}
