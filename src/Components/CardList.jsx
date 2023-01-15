import React, { useEffect, useContext, useMemo } from 'react'
import PeopleContext from '../Context/PeopleContext'
import Loader from './Loader'
import Card from './Card';
import Confirm from './Confirm';
import Alert from './Alert';
import Search from './Search';
import AddCharacter from './AddCharacter';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BoxStyled = styled(Box)(() => ({
    margin: '20px 15px'
}))

const CardList = () => {

    const { 
        getCharacters, 
        addCharacter,
        deleteCharacter, 
        handleChangeSearch, 
        openConfirm, 
        closeConfirm, 
        closeAlert, 
        openAddCharacter, 
        closeAddCharacter,
        state
    } = useContext(PeopleContext)

    useEffect(() => {
        getCharacters();
    }, [])

    const resultsCharacterSearch = useMemo(() => {
        if(!state.searchValue) return state.characters

        // si se seteo algun valor en el buscador filtro del array de characters los nombres que coincidan con la busqueda 
        return state.characters.filter((character) => character.name.toLowerCase().includes(state.searchValue.toLowerCase()))
    }, [state.searchValue, state.characters])


    if(state.loading){
        return <Loader />
    }

    return (
        <BoxStyled>

            <Grid container alignItems='center' alignContent='center' justifyContent='space-between' spacing={2} mb={3}>
                <Grid item md={8} sm={8} xs={8}>
                    <Search searchValue={state.searchValue} handleChangeSearch={handleChangeSearch} />
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <Button variant='contained' size='large' fullWidth onClick={openAddCharacter}>Agregar personaje</Button>
                </Grid>
            </Grid>

            <Grid container alignItems='center' spacing={3}>
                {
                    resultsCharacterSearch.map((character) => (
                        <Card key={character.name} character={character} openConfirm={openConfirm}/>
                    ))
                }
            </Grid>

            {state.openConfirm &&
                <Confirm 
                    openConfirm={state.openConfirm}
                    handleCloseConfirm={closeConfirm}
                    title='¿Estas seguro?'
                    description='Si eliminas a este personaje no podras volver a recuperarlo luego'
                    handleConfirm={deleteCharacter}
                />
            }

            {state.openAddCharacter &&
                <AddCharacter
                    openModal={state.openAddCharacter} 
                    handleCloseModal={closeAddCharacter} 
                    addCharacter={addCharacter}
                />
            }

            {state.openAlert &&
                <Alert 
                    openAlert={state.openAlert}
                    handleClose={closeAlert}
                    severity='success'
                    text={state.addCharacter ? 'Personaje Agregado correctamente' : 'Personaje eliminado correctamente'}
                />
            }
        </BoxStyled>
    )
}

export default CardList