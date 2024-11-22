import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import SchemaForm from "./components/SchemaForm";
import DataForm from "./components/DataForm";
import GeneratedApi from "./components/GeneratedApi";
import Spinner from "./components/Spinner";


const App = () => {
  const [theme, setTheme] = useState("dark");
  const [step, setStep] = useState(1);
  console.log(step);
  const [schema, setSchema] = useState([]);
  const [data, setData] = useState([]);
  const [apiId, setApiId] = useState();
  const [loading , setLoading] = useState(false);
  

  //console.log("app setion id",apiId); // Example: 'e7b8f8e0-8ddc-11eb-8dcd-0242ac130003'

  const makeApiLink = async (data) => {
    try {
      setLoading(true);
      console.log(`${import.meta.env.VITE_API_BASE_URL}/save-dynamic-data`)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/save-dynamic-data`, {
        method: 'POST',  // Use 'GET', 'POST', etc. depending on the API method
        headers: {
          'Content-Type': 'application/json',  // Set content type as JSON
          // Add any other headers if required, like authorization
        },
        body: JSON.stringify(data),  // Convert the data object to JSON format
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
  
      const responseData = await response.json();
      console.log('Response from API:', responseData);
      console.log(responseData.response)
      setData(responseData.response);

    } catch (error) {
      console.log('Error calling API:', error);
    }
    setLoading(false);
  };



  return (
    <div className={` min-h-screen ${theme === 'light' ? "bg-white" : "dark:bg-gray-900" }`}>
      <header className={`p-4 bg-gray-100 ${theme == "light" ? "bg-slate-900 backdrop-blur-md" : " dark:bg-gray-800"} flex justify-between items-center`}>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
         
          {step == 1 && " API Schema Creator"}
          {step == 2 && "Manipulation of Data"}
          {step == 3 && "Your API"}
        </h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
      <main className=" p-4 md:w-2/3 mx-auto">
        <div>
        {step === 1 && (
          <SchemaForm theme={theme} setSchema={(fields) => {
            setSchema(fields);
            setStep(2);
          }} />
        )}
        {step === 2 && (
          <DataForm schema={schema} theme={theme} setApiId={setApiId} setStep={setStep} makeApiLink={makeApiLink} setData={(users) => {
            setData(users);
          }} />
        )}
        {step === 3 && (
          loading ? (
            <Spinner/>
         ) : (
           <GeneratedApi theme={theme} apiId={apiId} data={data} />
         )
        ) }
        </div>
      </main>
    </div>
  );
};

export default App;
