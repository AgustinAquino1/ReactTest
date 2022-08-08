import React, { useState, useEffect} from "react";
import axios, { AxiosError } from "axios";
import './Components.css';

const Status = ({apiName}) => {

const [state, setState] = useState([]);
const [error, setError] =useState ([])
const [clockState, setClockState] = useState();

const modifyRefreshInterval = 15 /* If you want to change the refresh interval, must modify this number. Is written in seconds*/
  
        
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.factoryfour.com/${apiName}/health/status`
      )
        .catch(function (error) {
          setError(error) 
        });
        setState(data);
        const date = new Date(data.time);
  
        setClockState(date.toLocaleTimeString());
        
        
      };
      
      useEffect(() => {

      fetchData()
      setInterval(() => {
        fetchData()     
      }, (1000 * modifyRefreshInterval));
    }, []);
    
   
  
  
   
    
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