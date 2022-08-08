const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
mongoose.connect(process.env.MONGO_URI, {newUrlParser: true},()=>{
    console.log('connected db');
});
//middleware here
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
//homepage
app.get('/', (req,res)=>{res.write("Home page desu ka")});
//users route
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, ()=> {console.log("App running on port " + port)});