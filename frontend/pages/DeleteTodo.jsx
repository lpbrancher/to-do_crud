import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
// import styles from './CreateTodo.module.css'

export default function DeleteTodo(todo) {
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const handleDeleteTodo = () => {
        setLoading(true)
        axios.delete(`http://localhost:5555/todos/${id}`)
            .then(() => {
                setLoading(false)
                navigate('/')
            }).catch((error) => {
                setLoading(false)
                alert('An error happened.')
                console.log(error)
            })
    }
    return (
        <div className="p-4">
            
            <h1 className="text-3xl my-4">Delete to-do</h1>
            {loading ? <Loader /> : ''}
            <div className="">
                <h3 className="text-2xl">Are you sure you want to delete this to-do?</h3>
                <div className="flex">
                    <Link className="ui-btn" to='/'>Go back</Link>
                    <button className="ui-btn" onClick={handleDeleteTodo}>
                        Yes, delete it
                    </button>
                </div>
            </div>
        </div>
    )
}
