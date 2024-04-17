const express=require('express');
const app=express();
require("dotenv").config();
const dbConfig=require("./config/dbConfig");
const portfolioRoute=require("./routes/portfolioRoute");
app.use(express.json());
app.use("https://bhavesh-portfolio-backend.vercel.app/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5050;

//for hosting
/*const path=require("path");
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build/index.html"));
    });
}*/

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

