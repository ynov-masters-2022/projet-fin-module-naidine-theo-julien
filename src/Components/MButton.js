import Button from '@mui/material/Button';
import { useState } from 'react';

const MButton = (props) => {
    const [clic, setClic] = useState(0);

    const click = (valeur) => setClic(console.log(props.ville));

return(
    <Button variant='contained' onClick={click}>{props.name}</Button>
    )
}
export default MButton;