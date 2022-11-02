import Button from '@mui/material/Button';
import WeatherBody from './WeatherBody';
import { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import '../css/SearchBar.css'


const Recherche = () => {

    const typed = useRef("");
    const [apiResponse, setapiResponse] = useState("");
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiText = "&lang=fr&units=metric&APPID=";
    const api ="0eb30579f3b53ddf5aca5c62e09b62d9";

    let url=  "";
    const rechercheVille  = (e) =>{
        e.preventDefault();
        url=  baseUrl + typed.current.value + apiText + api;
        
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
              
            })
    }
    return (
        <div className="weatherBody">
            <div className="searchBar">
            <form onSubmit={rechercheVille}>    
            <TextField 
                inputRef={typed} 
                label="Ville" 
                variant="outlined"
            />
            <Button id='searchButton' variant='contained' type="submit">Recherche</Button>
            </form>
            </div>
            <WeatherBody data={apiResponse}> </WeatherBody>
        </div>   
    )
}

export default Recherche;