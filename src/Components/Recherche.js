import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import WeatherBody from './WeatherBody';
import { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

const Recherche = () => {

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    const { vertical, horizontal, open } = state;
    const handleClick = () => {
        setState({ open: true, vertical: 'top', horizontal: 'center' });
      };
    const handleClose = () => {
    setState({ ...state, open: false });
    };
    const typed = useRef("");
    const [apiResponse, setapiResponse] = useState("");
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiText = "&lang=fr&units=metric&APPID=";
    const api ="0eb30579f3b53ddf5aca5c62e09b62d9";

    const [apiResponseError, setapiResponseError] = useState("");

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
            .catch(function (error) {
                if (error.response) {
                  // la requête a été faite et le code de réponse du serveur n’est pas dans
                  // la plage 2xx
                  setapiResponseError(error.response.data);
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  handleClick();
                } else if (error.request) {
                  // la requête a été faite mais aucune réponse n’a été reçue
                  // `error.request` est une instance de XMLHttpRequest dans le navigateur
                  // et une instance de http.ClientRequest avec node.js
                  console.log(error.request);
                } else {
                  // quelque chose s’est passé lors de la construction de la requête et cela
                  // a provoqué une erreur
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Erreur"
                key={vertical + horizontal}
                autoHideDuration={6000}
            >
            <Alert severity="warning">Cette ville ne correspond pas!</Alert>    
            </Snackbar>            
            <form onSubmit={rechercheVille}>    
            <TextField 
                inputRef={typed} 
                label="Ville" 
                variant="outlined"
            />
            <Button variant='contained' type="submit">Recherche</Button>
            </form>
            <WeatherBody data={apiResponse}> </WeatherBody>
        </div>   
    )
}

export default Recherche;