import React, { useState, useEffect} from "react";
import axios, { AxiosError } from "axios";

const useFetchData = (apiName) => {
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

        return {state, error, clockState}
}
export default useFetchData