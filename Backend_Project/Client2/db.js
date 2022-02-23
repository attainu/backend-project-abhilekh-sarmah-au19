const mongoose= require("mongoose");

var mongoDBURL = "mongodb+srv://Abhilekhz:abhipom01@cluster0.fsury.mongodb.net/e-commerceDB?retryWrites=true&w=majority"

mongoose.connect(mongoDBURL, 
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })

var dbconnect = mongoose.connection

dbconnect.on('error', ()=>{
    console.log(`Mongo DB connection Failed`);
})

dbconnect.on('connected', ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports=mongoose