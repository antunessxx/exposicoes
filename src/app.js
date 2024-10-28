import express from 'express';
import connectDB from './config/db.js'
import explorerRouter from './router/explorerRouter.js'
import speciesRouter from './router/speciesRouter.js'
import expeditionRouter from './router/expeditionRouter.js'

connectDB()

const app = express();

app.use(express.json());

app.use('/explorer',explorerRouter);
app.use('/species',speciesRouter );
app.use('/expedition',expeditionRouter )

app.listen(process.env.PORT,() => console.log('Servidor rodando na porta 3000'));
