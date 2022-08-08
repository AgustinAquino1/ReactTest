import React, { useState, useEffect} from "react";
import axios, { AxiosError } from "axios";
import './Components.css';
import useFetchData from "../../hooks/useFetchData";

const Status = ({apiName}) => {

const {state, clockState, error} = useFetchData(apiName) 
    
    return (
       
        <div className="card">
        <ul> 
          <div className="div-apiName" ><li className = "apiName" >{apiName}</li></div>

           {error.message !== 'Network Error' ? <div className="div-message"><li className="message">{state.message}</li></div> : <div className="div-outage"><li className="outage">OUTAGE</li></div>}

           {error.message !== 'Network Error' ? <div className="div-hostname"><li className="hostname">{state.hostname}</li></div> : <div className="div-error"><li className="error">503 {error.message}</li></div>}


           <div className="clock">{clockState}</div>
                                   
        </ul>
      </div>            
  );

};

export default Status;