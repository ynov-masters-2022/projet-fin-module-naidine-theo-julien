import AccountCircleIconRounded from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../../css/UserAccount.css'

const UserAccount = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
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
                </DialogContent>
                <DialogActions>
                    <Button>Connexion</Button>
                    <Button onClick={handleClose}>Annuler</Button>
                </DialogActions>

            </Dialog>
        </div>
    )

}

export default UserAccount;