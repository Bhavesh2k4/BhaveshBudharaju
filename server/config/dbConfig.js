const mongoose = require("mongoose");
console.log(process.env.mongo_url);
mongoose.connect(process.env.mongo_url);

const connection=mongoose.connection;
connection.on('error',()=>{
    console.log("Error connecting to MongoDB");
});

connection.on('connected',()=>{
    console.log("Connected to MongoDB");
});

module.exports=connection;