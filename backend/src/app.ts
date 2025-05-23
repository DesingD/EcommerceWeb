import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


const app: Application = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());


// Import routes
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import productRouter from './routes/productRouter';
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;