import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        msg: 'test'
    });
});

app.listen(port, () => {
    console.log(`Now browse to localhost: ${port}`);
});