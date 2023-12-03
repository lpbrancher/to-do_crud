import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    {
        todoText: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            default: false
        }
    }
)

export const Todo = mongoose.model('Todo', todoSchema)