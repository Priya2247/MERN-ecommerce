const mongoose=require('mongoose')

const connectDBServer=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("Database is connected to host....."+con.connection.host)
    })
}

module.exports=connectDBServer;