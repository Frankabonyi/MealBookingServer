import express from 'express';

const app = express();

const PORT = 9001;

app.get('/', (req, res) => {
    return res.send('API is cool man');
});


app.listen(PORT,  () => {
    console.log(`server is on ${PORT}`);
});