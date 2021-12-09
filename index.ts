import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL!, () => {
    console.log('Connected to MongoDB!')
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Homepage!")
})

app.listen(8080, () => {
    console.log('Backend server is running on port 8080!')
})