<<<<<<< HEAD
const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
 

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)
app.use( 
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

// routes and mount
const dynamicRoute = require("./routers/dynamicRoute");
app.use("/api/v2",dynamicRoute);

// connect to database
const dbConnect = require("./config/database");
dbConnect.connect();


// default route 
app.get("/",(req, res) =>{
    return res.json({
        success:true,
        message:"Hello, This is default route",
    })
});

app.listen(PORT, () =>{
    console.log(`App is running at ${PORT}`)
});
=======
//console.log('jep');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

var cors = require("cors");
 
app.use(
    cors({
      origin: "*",
      credentials:true,
    })
  );
 
// middleware
app.use(express.json());

// Alternative to body-parser (built-in with Express)
app.use(express.urlencoded({ extended: true }));

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// connect to db
const {notesDB} = require('./config/database');
notesDB();

//cloud se connect krna h 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();


// import router and mount
const notesRouter = require('./routers/notesRouter');
app.use('/api/v1', notesRouter);


// activate application
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

// default router
app.use("/", (req, res) =>{
    res.send('This is Home Page');
})
>>>>>>> 648ff39d5d8aaef49284769aac6f0f3a25bb401f
