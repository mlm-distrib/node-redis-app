const Redis = require("ioredis");

const redis = new Redis();

redis.set("Hello", "World");

redis.get("Hello", (err, result) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log(result);
    }

})