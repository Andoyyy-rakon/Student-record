require("dotenv").config();
const express = require("express");
const connectionDb = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3000;


connectionDb();


app.use(express.json());

app.listen(PORT,()=>{
    console.log("The server is running at port :",PORT)
})