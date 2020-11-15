import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import redis from 'redis';
import bluebird from 'bluebird';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

//Connect with Redis server
const client = redis.createClient({
    host: process.env.REDIS_HOST || '172.17.0.1',
    port: 6379,
    db: 0,
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", err => {
    console.log("Error " + err);
});


const app = express();
//resolvers can access through client
const server = new ApolloServer({ typeDefs, resolvers, context: { client } });
server.applyMiddleware({ app });


app.listen(3000);
