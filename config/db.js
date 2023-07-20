const mongoose = require("mongoose")

const connectdb = async () =>{
    mongoose.connect(process.env.mongo_url)
    .then((conn)=>{
        console.log(`connected to db:${conn.Connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    })
}

module.exports = connectdb