import express from 'express';
import bodyParser from 'body-parser'; 

const app = express();

const PORT = 9001;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    return res.send('API is cool man');
});


app.listen(PORT,  () => {
    console.log(`server is on ${PORT}`);
});