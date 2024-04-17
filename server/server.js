const express=require('express');
const app=express();
require("dotenv").config();
const dbConfig=require("./config/dbConfig");
const portfolioRoute=require("./routes/portfolioRoute");
const cors = require('cors');
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5050;
const allowedOrigins = ['https://bhavesh-budharaju-portfolio.vercel.app'];
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow requests from the specified origins
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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

app.use("/",(req,res)=>{
    res.status(404).send("server is running");
});

