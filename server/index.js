
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