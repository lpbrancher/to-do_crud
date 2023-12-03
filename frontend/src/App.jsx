import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateTodo from '../pages/CreateTodo'
import './App.css'
import DeleteTodo from '../pages/DeleteTodo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateTodo />} />
      <Route path='/todos/delete/:id' element={<DeleteTodo />} />
    </Routes>
  )
}

export default App
