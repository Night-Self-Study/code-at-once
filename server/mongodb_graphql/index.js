import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
// MongoDB connect (password: nightselfstudy)
const uri = 'mongodb+srv://user_sy:nightselfstudy@code-at-once-mgoje.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.Promise = global.Promise; //비동기처리
mongoose.connect(uri, { useNewUrlParser: true }); 

app.get('/', (req, res) => {
    res.json({
        msg: 'test'
    });
});

app.listen(port, () => {
    console.log(`Now browse to localhost: ${port}`);
});