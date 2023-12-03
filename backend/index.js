import express from 'express';
import mongoose from 'mongoose';
import { PORT, DB_URL } from "./config.js";
import todosRoute from './routes/todosRoute.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('/ route working')
});
app.use('/todos', todosRoute)
mongoose
    .connect(DB_URL)
    .then(() => {
        console.log('connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}.`)
        })
    })
    .catch((error) => {
        console.log(error)
    })