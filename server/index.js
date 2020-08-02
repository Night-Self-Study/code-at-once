var redis = require("redis"),
    client = redis.createClient({ 
        host: process.env.REDIS_HOST || '192.168.99.100',
        port : 6379, 
        db : 0,
    });


client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("hello", "Node.js");

client.get("hello", function(err, val) {
        console.log(val);
        client.quit();
});