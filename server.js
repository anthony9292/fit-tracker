const express = require("express");
const mongoose = require("mongoose")
const logger = require("morgan");


const PORT = process.env.PORT || 3001
const app = express(); 

app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true, 
     useUnifiedTopology: true, 
     useFindAndModify: false,
     useCreateIndex: true,

}); 

require('./routes/api-route')(app); 
require('./routes/html-route')(app);


app.listen(PORT, () => { 
    console.log(`App is runing on port ${PORT}!`);
})
