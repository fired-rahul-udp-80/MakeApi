const DynamicModel = require("../models/dynamicModel");
// const mailSender = require("../config/MailSender");

exports.dynamicController = async(req, res) =>{
    try{
        const {modelName, data} = req.body;
        console.log(modelName , data);

        if(!modelName || data.length == 0 ||!Array.isArray(data) ){
            return res.status(500).json({
                success:false,
                message:"All field is required",
            });
        }

        const newObject = new DynamicModel(req.body);
        console.log(newObject);
        const response = await newObject.save();

        if(!response){
            return res.status(500).json({
                success:false,
                message:"Error occured while"
            })
        }
        return res.status(200).json({
            success:true,
            message:"API data save successfully",
            response
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            error : "Error occured while saving data in DB",
            message:error.message,
        })
    }
    
}

exports.getAllResponse = async(req , res) =>{
    try{
        await DynamicModel.find({},{data:true,modelName:true}).then(d =>{
            return res.status(200).json({
                success:true,
                message:"Response fetch successfully",
                response : d
            })
        }).catch(e =>{
            return res.status(400).json({
                success:false,
                message:"error occured",
                error : e
            });
        })
    }catch(error){
        return res.json({
            success:false,
            message:`Error Occured in fetching data from db ${error}`,
        });
    }
}

exports.getApi = async(req, res) =>{
    try{
        const {modelName} = req.params;
        console.log(modelName);
        // check the parameter is empty or not
        if(!modelName){
            return res.status(400).json({
                success:false,
                message:"params Required",
            }); 
        }
        
        // Find the document(s) with the given modelName
        const data = await DynamicModel.findOne({ modelName });

         
        if (!data) {
            return res.status(404).json({
                success: false,
                message: `No data found for modelName: '${modelName}'`,
            });
        }
        
        return res.status(200).json({
            success: true,
            message: `Data retrieved successfully for modelName: '${modelName}'`,
            data,
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error while generating API",
            error : error
        })
    }
}