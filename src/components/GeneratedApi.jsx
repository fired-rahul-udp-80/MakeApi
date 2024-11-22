import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
const GeneratedApi = ({ apiId,data,theme }) => {
  console.log("genereate api ",data)
  const apiLink = `${import.meta.env.VITE_API_BASE_URL}/get-api/${apiId}`;
  const [copied, setCopied] = useState(false);
  const copyBtn = () =>{
    navigator.clipboard.writeText(apiLink);
    setCopied(true);
    setTimeout( () =>{
      setCopied(false);
    },2000)

  }
   

  return (
    <div className={`container mx-auto p-4 bg-white shadow rounded ${theme == "light" ? "bg-black backdrop-blur-md" : " dark:bg-gray-800"} dark:text-white`}>
      <h2 className="text-xl font-bold mb-4">Your API</h2>
      <div className="flex justify-between">
      <p className="mb-2">
        API:{" "}
        <code >
        <a
          href={apiLink}
          className="text-blue-500 hover:underline dark:text-blue-400"
        >
          {apiLink}
        </a>
        </code>
       
      </p>
      <div className="flex flex-col items-center gap-y-2 relative">
      {
        copied && <span className=" absolute top-[-22px] text-xs font-semibold text-center transition-all duration-200">✅</span>
      }
      <FaCopy  onClick={copyBtn} className="cursor-pointer text-green-500 text-2xl "/>
      </div>
      </div>
      <pre className="bg-gray-100 p-4 rounded dark:bg-gray-700">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default GeneratedApi;