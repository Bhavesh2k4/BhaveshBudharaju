const express=require('express');
const app=express();
require("dotenv").config();
require("./config/dbConfig");
const portfolioRoute=require("./routes/portfolioRoute");
const cors = require('cors');
app.use(express.json());
app.use("https://bhavesh-budharaju.vercel.app/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5050;

app.use(
  cors({
      origin:'*',
      methods:['GET', 'POST'],
      credentials: true,
}));

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

app.use("/",(req,res)=>{
    res.status(404).send("server is running");
});

