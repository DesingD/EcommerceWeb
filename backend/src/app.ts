import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


const app: Application = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());


// Import routes
import userRouter from './routes/userRouter';
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;