const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("" ,error =>{
    if(!error){
        console.log("error darim");
    }
} )
app.use(express.json());
app.use(express.urlencoded( {extended : true} ));

// app.use("/users", router);
app.use("/users", usersRoute);

app.listen(3000, () => console.log("server runed."));
