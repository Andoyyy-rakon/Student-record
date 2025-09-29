require("dotenv").config();

const mongoose = require('mongoose');

const connectionDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Successfully connected to Database ")

    }catch(error){
        console.error("Faild to connect to Database",error);
        process.exit(1);
    }
}

module.exports=connectionDb;