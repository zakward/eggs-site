const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan')
require("dotenv").config()

const path = require('path');

mongoose.set("strictQuery", false);

app.use(express.static(path.join(__dirname, 'client', "dist")))

const connectToDB= async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to the egg database")
        app.listen(process.env.PORT, ()=> console.log(`Listening on Port ${process.env.PORT}`));
    } catch (error) {
        console.log(error)
    }
}

connectToDB()

app.use(express.json())
app.use(morgan("dev"))

// app.use("/eggs", require("./routes/eggRouter"))
app.use("/eggs", require("./routes/eggRouter"))

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html")); // middleware for deployment // dist for vite
  });