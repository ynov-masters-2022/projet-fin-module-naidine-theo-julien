import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackAlert = (props) => {
    return (
        <Snackbar
        anchorOrigin={{vertical:"top", horizontal:"center"}}
        open={props.error}
        onClose={props.handleClose}
        message="Erreur"
        key="top center"
        autoHideDuration={2500}
    >
    <Alert severity="warning">"{props.typed}" n'existe pas ou est mal orthographié</Alert>    
    </Snackbar>
    );
}

export default SnackAlert;