import express from 'express';
import mongoose from 'mongoose';
import graphlHTTP from 'express-graphql'; 
import schema from './graphql/schema'; 

const app = express();
const port = 3000;
// MongoDB connect
const uri = 'mongodb+srv://user_sy:nightselfstudy@code-at-once-mgoje.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.Promise = global.Promise; 
mongoose.connect(uri, { useNewUrlParser: true }); 

app.get('/', (req, res) => {
    res.json({
        msg: 'test'
    });
});

app.use(`/graphql`, graphlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Now browse to localhost: ${port}`);
});