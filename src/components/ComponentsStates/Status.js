import React, { useState, useEffect} from "react";
import axios, { AxiosError } from "axios";
import './Components.css';
const Status = ({apiName}) => {

const [state, setState] = useState([]);
const [error, setError] =useState ([])
const [clockState, setClockState] = useState();

const modifyRefreshInterval = 15
  
        
  const fetchData = async () => {
      const date = new Date();
        setClockState(date.toLocaleTimeString());
      const { data } = await axios.get(
        `https://api.factoryfour.com/${apiName}/health/status`
        )
        .catch(function (error) {
          setError(error) 
        });
        setState(data);
        
       
    };
  
    useEffect(() => {
      fetchData()
      setInterval(() => {
        fetchData()     
      }, (1000 * modifyRefreshInterval));
    }, []);
    
    console.log(error)
   
    
    return (
      
      
        <div className="card">
        <ul> 
          <div className="div-apiName" ><li className = "apiName" >{apiName}</li></div>

           {error.message !== 'Network Error' ? <div className="div-message"><li className="message">{state.message}</li></div> : <div className="div-outage"><li className="outage">OUTAGE</li></div>}

           {error.message !== 'Network Error' ? <div className="div-hostname"><li className="hostname">{state.hostname}</li></div> : <div className="div-error"><li className="error">503 {error.message}</li></div>}


           <div className="clock">{error.message !== 'Network Error' ? clockState : "" }</div>
                                   
        </ul>
      </div>
        
      
  );

};

export default Status;