import React, { useState, useEffect} from "react";
import Status from "./components/ComponentsStates/Status";
import './App.css';



const apiNames = ["accounts", "assets","customers","datapoints","devices",
"documents","forms","invites","media","messages","namespaces","orders",
"patients","relationships","rules","templates","users","workflows" 
] 

const App = () => {

  return(
  <>
  <h1 className="status-dashbord"> Status Dashbord</h1>
  <div id="wrapper">
    {apiNames.map((apiName,i)=> <Status
    key={i}
    apiName={apiName}
    />)  }
    </div>
  </>
  )

  

};

export default App;