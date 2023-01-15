import React from 'react'
import TextField from '@mui/material/TextField';

const Search = ({searchValue, handleChangeSearch}) => {
    return (
        <TextField label="Buscar por nombre" fullWidth variant="outlined" value={searchValue} onChange={(e) => handleChangeSearch(e)} />
    )
}

export default Search