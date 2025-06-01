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
import addressRouter from './routes/addressRouter';
import roleRouter from './routes/roleRouter';
import orderRouter from './routes/ordersRouter';
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/addresses', addressRouter);
app.use('/api/roles', roleRouter);
app.use('/api/orders', orderRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;