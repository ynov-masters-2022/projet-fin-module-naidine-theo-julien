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

const UserAccount = () => {
    const [open, setOpen] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState('');
    const [loadingDisplay, setloadingDisplay] = useState('none')

    const username = useState("");
    const password = useRef("");

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleLogClick = () =>{
        setButtonDisplay('none');
        setloadingDisplay('');

        //Envoie d'une requete à l'API pour les identifiants
        axios({
            method: 'get',
            url: 'www.google.com',
            responseType: 'json'
          })
            .then(function (response) {
                if (response.data){
                    setOpen(false);
                    //  Verification
                    setButtonDisplay('inline-block');
                    setloadingDisplay('none');
                }
                else {
                    setButtonDisplay('inline-block');
                    setloadingDisplay('none');
                    setOpen(false);
                }
            }).catch((error)=>{

                setOpen(false);
                setButtonDisplay('inline-block');
                setloadingDisplay('none');
            });
      }
    
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

}

export default UserAccount;