import React, { useState } from "react";

const SchemaForm = ({ setSchema,theme }) => {
  const [fieldName, setFieldName] = useState("");
  
  const [fields, setFields] = useState([]);//array 
  console.log(fields);
  
  const addField = () => {
    if (fieldName.trim()) {
      setFields([...fields, fieldName]);
      setFieldName("");
    }
  };

  const saveSchema = () => {
    setSchema(fields);
  };

  return (
    <div className={`flex flex-col gap-y-2 mx-auto p-4 bg-white shadow rounded ${theme == "light" ? "bg-black backdrop-blur-md" : " dark:bg-gray-800"} dark:text-white`}>
      <h2 className="text-xl font-bold mb-4">Define Your Schema</h2>
      <input
        type="text"
        placeholder="Enter field name"
        value={fieldName}
        required
        onChange={(e) => setFieldName(e.target.value)}
        className="w-full px-4 py-2 mb-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <button
        onClick={addField}
        className="px-4 font-semibold w-fit py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Field
      </button>
      <ul className="mt-4">
        {fields.map((field, index) => (
          <li key={index} className="text-sm py-1">{field}</li>
        ))}
      </ul>
      <button
        onClick={saveSchema}
        className="w-fit font-semibold px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save and Proceed
      </button>
    </div>
  );
};

export default SchemaForm;
