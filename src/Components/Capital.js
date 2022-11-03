import axios from 'axios';
import { useState } from 'react';
import CapitalWeather from './CapitalWeather';

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiText = "&lang=fr&units=metric&APPID=";
const api ="0eb30579f3b53ddf5aca5c62e09b62d9";


const Capital = (props) => {
    let url =  baseUrl + props.ville + apiText + api;
    const [apiResponse, setapiResponse] = useState("");

        /* appel API axios */
        axios({
            method: 'get',
            url: url,
            responseType: 'json'
          })
            .then(function (response) {
                if (response.data){
                    setapiResponse(response.data);
                }
                else {
                    console.log("Erreur");
                }
              
            });

    return (
        <CapitalWeather data={apiResponse}> </CapitalWeather>
    )

}

export default Capital;