import axios from 'axios';
import CapitalWeather from './CapitalWeather';

const Capital = (props) => {
    let url= process.env.REACT_APP_baseUrl + props.ville + process.env.REACT_APP_apiText + process.env.REACT_APP_api;
    let apiResponse;
    const loading = () =>{
        axios({
            method: 'get',
            url: url,
            responseType: 'json'
            })
            .then(function (response) {
                if (response.data){
                    return 1;
                }
                else {
                    console.log("Erreur");
                }
        })
    };
    return (
        apiResponse?<CapitalWeather data={apiResponse}/> : <p>Hey</p>
    );
}

export default Capital;