import ChampRecherche from './ChampRecherche';
import MButton from './MButton';
import { useRef, useState } from 'react';
import { TextField } from '@mui/material';

const Recherche = () => {
    const [ville, setVille] = useState("")
    const typed = useRef("")
    const rechercheVille = () => setVille(typed.current.value)

    return (
        <div>    
            <TextField 
                inputRef={typed} 
                label="Ville" 
                variant="outlined"
                onChange={rechercheVille}
            />
            <MButton name="Recherche" ville={ville}/>
        </div>   
    )
}

export default Recherche;