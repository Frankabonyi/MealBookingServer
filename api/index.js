import express from 'express';
import bodyParser from 'body-parser'; 

import mealRoutes from './routes/meals.routes';

const app = express();

const PORT = 9001;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    return res.send('API is cool man');
});

//handle

app.use('/api/v1/meals', mealRoutes);


app.listen(PORT,  () => {
    console.log(`server is on ${PORT}`);
});