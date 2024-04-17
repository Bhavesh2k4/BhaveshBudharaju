const express=require('express');
const app=express();
require("dotenv").config();
require("./config/dbConfig");
const portfolioRoute=require("./routes/portfolioRoute");
const cors = require('cors');
const port=process.env.PORT || 5050;

app.use(
  cors({
      origin:'*',
      methods:['GET', 'POST'],
      credentials: true,
}));

app.use("/api/portfolio",portfolioRoute);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
app.use(express.json());
app.use("/",(req,res)=>{
    res.status(404).send("server is running");
});

