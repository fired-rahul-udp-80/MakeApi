// const mongoose = require("mongoose");

// /**
//  * Creates a dynamic mongoose model for an array of objects.
//  * @param {string} modelName - The name of the model.
//  * @param {Object} sampleData - Sample data to infer the schema.
//  * @returns {mongoose.Model} - A mongoose model.
//  */
// const createDynamicArrayModel = (modelName, sampleData) => {
//   const schemaDefinition = Object.keys(sampleData).reduce((acc, key) => {
//     acc[key] = { type: mongoose.Schema.Types.Mixed }; // Allow flexible data types
//     return acc;
//   }, {});

//   const dynamicSchema = new mongoose.Schema(
//     { data: [schemaDefinition] }, // Store as an array of objects
//     { timestamps: true }          // Add createdAt and updatedAt fields
//   );

//   if (mongoose.models[modelName]) {
//     return mongoose.models[modelName];
//   }

//   return mongoose.model(modelName, dynamicSchema);
// };

// module.exports = createDynamicArrayModel;

const mongoose = require("mongoose");

const dynamicModelSchema = new mongoose.Schema(
    {
        modelName : {
            type:String,
            required:true,
        },
        data: {
            type: mongoose.Schema.Types.Mixed, // Flexible structure to hold any data
            required: true,
          },
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("DynamicModel",dynamicModelSchema);
