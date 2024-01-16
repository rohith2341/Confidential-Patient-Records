const mongoose = require('mongoose');

//Database Connection
const connectDatabase = () => {
    mongoose.connect("mongodb+srv://minalsaini200110:0VKMcDFoeidrWyuJ@cluster0.uwudduc.mongodb.net/auth?retryWrites=true&w=majority", {

        //For avoid Warnings
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDb Database connect with HOST : ${con.connection.host}`)
    })
}

module.exports = connectDatabase
