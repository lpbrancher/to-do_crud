import express from "express";
import { Todo } from '../models/todoModel.js'
const router = express.Router()

//Create
router.post('/', async (request, response) => {
    try {
        if (!request.body.todoText) {
            return response.status(400).send({
                message: 'no text provided'
            })
        }
        const newTodo = {
            todoText: request.body.todoText,
            done: request.body.done
        }
        const todo = await Todo.create(newTodo)
        return response.status(201).send(todo)
    }
    catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});

//Read
router.get('/', async (request, response) => {
    try {
        const todos = await Todo.find({})
        return response.status(200).json({
            count: todos.length,
            data: todos
        })
    }
    catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

//Update
router.put('/:id', async (request, response) => {
    try {
        if (request.body.todoText == undefined || request.body.done == undefined) {
            return response.status(400).send({
                message: 'send all required fields'
            })
        }
        const { id } = request.params;
        const result = await Todo.findByIdAndUpdate(id, request.body)
        if (!result) {
            return response.status(404).json({ message: 'todo not found!' })
        }
        return response.status(200).send({ message: 'todo updated!' })
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// Delete
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Todo.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'todo not found' });
        }
        return response.status(200).send({ message: 'todo deleted' });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router;