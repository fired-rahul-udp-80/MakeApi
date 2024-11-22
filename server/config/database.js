const mongoose = require("mongoose");
require("dotenv").config();
<<<<<<< HEAD

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};
=======
exports.notesDB = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=> console.log("DB Connection Successfully"))
    .catch( (error) =>{
        console.log("DB Connection Failed");
        console.error(error.message);
        process.exit(1);
    });
};

 
>>>>>>> 648ff39d5d8aaef49284769aac6f0f3a25bb401f
