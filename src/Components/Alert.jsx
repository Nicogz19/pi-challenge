import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertComponent = React.forwardRef(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert = ({handleClose, openAlert, severity, text}) => {

    return (
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
            <AlertComponent onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {text}
            </AlertComponent>
        </Snackbar>
    )
}

export default Alert