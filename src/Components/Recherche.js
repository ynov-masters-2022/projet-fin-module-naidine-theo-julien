import Button from '@mui/material/Button';
import WeatherBody from './WeatherBody';
import { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import '../css/SearchBar.css'
import SnackAlert from './SnackAlert';

const Recherche = () => {

    const typed = useRef("");
    const [apiResponse, setapiResponse] = useState("");

    const [error, setError] = useState(false);

    const handleErrorTyped = () => {
        setError(true);
    };

    const handleClose = () => {
        setError(false);
    };

    let url=  "";
    const rechercheVille  = (e) =>{
        e.preventDefault();
        url=  process.env.REACT_APP_baseUrl + typed.current.value + process.env.REACT_APP_apiText + process.env.REACT_APP_api;
        console.log(url);
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
            })
            .catch((error) => {
                handleErrorTyped();
            });
    }
    return (
        <div className="weatherBody">
            <SnackAlert error={error} typed={typed.current.value} handleClose={handleClose}/>
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