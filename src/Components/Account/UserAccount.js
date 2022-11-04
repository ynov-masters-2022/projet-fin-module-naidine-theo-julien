import AccountCircleIconRounded from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../../css/UserAccount.css'
import axios from 'axios';
import {getCredentials} from '../../Services/FakeJwtServices';

const UserAccount = () => {
    const [open, setOpen] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState('');
    const [loadingDisplay, setloadingDisplay] = useState('none')

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
      
      const handleLogClick = () =>{
        setButtonDisplay('');
        setloadingDisplay('inline-block');
        getCredentials().then(function(response) {
            localStorage.setItem('firstname', response.firstname);
            localStorage.setItem('name', response.name);
            localStorage.setItem('country', response.country);
            localStorage.setItem('city', response.city);
            setButtonDisplay('inline-blocj');
            setloadingDisplay('');
            setOpen(false)
        })

      };
 
    const userDisconnected = () => {
        return (
            <div>
                <IconButton id="iconAccount" onClick={handleClickOpen}>
                    <AccountCircleIconRounded color='black' fontSize='large'></AccountCircleIconRounded>
                </IconButton>
                <Dialog open={open}>
                    <DialogTitle>
                        Connexion
                    </DialogTitle>
                    <DialogContent>
                        <TextField label="Utilisateur"/>
                        <TextField label="Mot de passe" type="password"/>
                        <CircularProgress sx={{ display: loadingDisplay}}></CircularProgress>
                    </DialogContent>
                    <DialogActions >
                        <Button sx={{ display: buttonDisplay}} onClick={handleLogClick}>Connexion</Button>
                        <Button sx={{ display: buttonDisplay}} onClick={handleClose}>Annuler</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    };
    

    const userConnected = () => {
        return (
            <p>Bonjour {localStorage.getItem('name')} {localStorage.getItem('firstname')}</p>
        )
    };

    return (
        localStorage.getItem("name")? userConnected() : userDisconnected()
    )
}

export default UserAccount;