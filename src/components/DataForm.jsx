import React, { useState } from "react";
import { v1 as uuidv1 } from 'uuid';

const DataForm = ({ schema, makeApiLink ,setApiId, setStep,theme }) => {
  const [userData, setUserData] = useState({});
  const [dataList, setDataList] = useState([]);
  
  
  

 
  const handleChange = (field, value, setStep) => {
    setUserData({ ...userData, [field]: value });
  };

  const addUser = () => {
    setDataList([...dataList, userData]);
    setUserData({});
  };

  const saveData = () => {
    const allApiData = {};
    const id = uuidv1();
    console.log(id); // Example: 'e7b8f8e0-8ddc-11eb-8dcd-0242ac130003'
    const apiData = "apiData" + id;
    allApiData.modelName = apiData;
    allApiData.data = dataList ;
   // console.log(allApiData);

    makeApiLink(allApiData);
    setApiId(apiData);
    setStep(3);
    
  };

  return (
    <div className={`container mx-auto p-4 bg-white shadow rounded ${theme == "light" ? "bg-slate-900 backdrop-blur-md" : " dark:bg-gray-800"} dark:text-white`}>
      <h2 className="text-xl font-bold mb-4">Enter Data for Schema</h2>
      {schema.map((field, index) => (
        <input
          key={index}
          type="text"
          placeholder={field}
          value={userData[field] || ""}
          onChange={(e) => handleChange(field, e.target.value)}
          className="w-full px-4 py-2 mb-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      ))}
      <button
        onClick={addUser}
        className="px-4 font-semibold py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add User
      </button>
      <ul className="mt-4">
        {dataList.map((user, index) => (
          <li key={index} className="text-sm py-1">
            {JSON.stringify(user)}
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-end">
      <button
        onClick={saveData}
        className="mt-4 font-semibold px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Generate API
      </button>
      </div>
    </div>
  );
};

export default DataForm;
