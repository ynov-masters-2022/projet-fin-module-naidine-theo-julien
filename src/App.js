import * as React from 'react';
import Recherche from './Components/Recherche';
import './App.css'
import Capital from './Components/Capital';
const capital  = ['Paris', 'Moscou' , 'Washington' , 'Amsterdam' , 'Bruxelles' , 'Londres' , 'Madrid' , 'Tokyo'];

function App() {
  return <div>
          <Recherche/>
          <Capital ville ={capital[1]}></Capital>
          <Capital ville ={capital[2]}></Capital>
          <Capital ville ={capital[3]}></Capital>
          <Capital ville ={capital[4]}></Capital>
          <Capital ville ={capital[5]}></Capital>
          <Capital ville ={capital[6]}></Capital>
          <Capital ville ={capital[7]}></Capital>
        </div>
}
export default App;
