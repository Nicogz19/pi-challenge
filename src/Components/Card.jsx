import React from 'react'
import CardMui from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import  { styled } from '@mui/material/styles';

const CardStyled = styled(CardMui)(() => ({
    textAlign: 'center',
    background: 'linear-gradient(90deg, rgba(18,131,214,1) 0%, rgba(46,153,232,1) 33%, rgba(87,176,241,1) 64%, rgba(88,182,251,1) 100%)',
    boxShadow: '4px 4px 2px #808080',
    color: 'white'
}))

const ButtonStyled = styled(Button)(() => ({
    width: '50%',
    margin: '0 25%',
    backgroundColor: '#262626',
    '&:hover': {
        backgroundColor: '#3c3c3c',
    }
}))

const Card = ({character, openConfirm}) => {

    let genderTranslated = 'No especificado'
    switch (character.gender) {
        case 'n/a':
            genderTranslated = 'No especificado'
            break;
        case 'male':
            genderTranslated = 'Masculino'
            break;
        case 'female':
            genderTranslated = 'Femenino'
            break;
    }

    return (
        <Grid item xs={12} sm={6} md={3} xl={2}>
            <CardStyled>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{character.name}</Typography>
                    <Typography variant="body2">Genero: {genderTranslated}</Typography>
                    <Typography variant="body2">Altura: {character.height}</Typography>
                </CardContent>
                <CardActions>
                    <ButtonStyled size="small" onClick={() => openConfirm(character.name)} variant='contained'>Eliminar</ButtonStyled>
                </CardActions>
            </CardStyled>
        </Grid>
    )
}

export default Card