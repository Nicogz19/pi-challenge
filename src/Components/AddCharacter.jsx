import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";

const DialogStyled = styled(Dialog)(() => ({
    '.MuiDialog-paper': {
        width: 600
    }
}))

const TextFieldStyled = styled(TextField)(() => ({
    '.MuiFormHelperText-root': {
        marginLeft: 0
    }
}))

const AddCharacter = ({ openModal, handleCloseModal, addCharacter }) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <DialogStyled
            open={openModal}
            onClose={handleCloseModal}
        >
            <DialogContent>
                <Box component='form' onSubmit={handleSubmit(addCharacter)}>
                    <TextFieldStyled
                        label='Nombre'
                        {...register("name", { required: 'El campo nombre es requerido' })}
                        fullWidth
                        margin='normal'
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />

                    <TextFieldStyled
                        select
                        label="Genero"
                        inputProps={register('gender', {
                            required: 'El campo genero es requerido',
                        })}
                        fullWidth
                        margin='normal'
                        defaultValue=''
                        error={!!errors.gender}
                        helperText={errors.gender?.message}
                    >
                        <MenuItem value='n/a'>No especificado</MenuItem>
                        <MenuItem value='male'>Masculino</MenuItem>
                        <MenuItem value='female'>Femenino</MenuItem>
                    </TextFieldStyled>

                    <TextFieldStyled
                        label='Altura'
                        {...register("height", { required: 'El campo altura es requerido' })}
                        fullWidth
                        margin='normal'
                        type='number'
                        error={!!errors.height}
                        helperText={errors.height?.message}
                    />

                    <DialogActions>
                        <Button onClick={handleCloseModal} variant='contained' color='inherit'>volver</Button>
                        <Button type='submit' variant='contained'>Guardar</Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </DialogStyled>
    )
}

export default AddCharacter