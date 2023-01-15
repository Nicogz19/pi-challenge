import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Confirm = ({ openConfirm, title, description, handleCloseConfirm, handleConfirm }) => {
    return (
        <Dialog
            open={openConfirm}
            onClose={handleCloseConfirm}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseConfirm} variant='contained' color='inherit'>Cancelar</Button>
                <Button onClick={handleConfirm} variant='contained'>Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Confirm