import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import redis from 'redis';
import bluebird from 'bluebird';
import typeDefs from './schema';
import resolvers from './resolvers';

//Connect with Redis server
const client = redis.createClient({ 
    host: process.env.REDIS_HOST || '192.168.99.100',
    port : 6379, 
    db : 0,
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", err => {
    console.log("Error " + err);
});


const app = express();
//resolvers can access through client
export const server = new ApolloServer({ typeDefs, resolvers, context: { client } });
server.applyMiddleware({ app });


app.listen(3000);