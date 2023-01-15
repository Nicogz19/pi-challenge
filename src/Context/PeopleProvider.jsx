import { useReducer } from 'react'
import PeopleReducer from './PeopleReducer'
import PeopleContext from './PeopleContext'
import axios from 'axios'

const PeopleProvider = (props) => {

    const initialState = {
        characters: [],
        characterToDelete: null,
        loading: false,
        openAlert: false,
        openConfirm: false,
        searchValue: '',
        openAddCharacter: false,
        error: null,
        addCharacter: false
    }

    const [state, dispatch] = useReducer(PeopleReducer, initialState)

    const getCharacters = async () => {

        dispatch({type: 'LOADING', payload: true})

        await axios.get('https://swapi.dev/api/people')
        .then(response => {
            dispatch({type: 'GET_CHARACTERS_SUCCESSFULLY', payload: response.data.results})
        })
        .catch(error => {
            dispatch({type: 'GET_CHARACTERS_ERROR', payload: error.message})
        })
    }
    
    const addCharacter = (data) => dispatch({type: 'ADD_CHARACTER', payload: data})

    const deleteCharacter = () => dispatch({type: 'DELETE_CHARACTER'})

    const handleChangeSearch = (evt) => dispatch({type: 'CHANGE_SEARCH', payload: evt.target.value})

    const openConfirm = (name) => {
        dispatch({type: 'OPEN_CONFIRM', payload: true})
        // cuando se abre el modal de confirmacion seteo el nombre del personaje seleccionado para posteriormente eliminarlo
        dispatch({type: 'CHARACTER_TO_DELETE', payload: name})
    }

    const closeConfirm = () => dispatch({type: 'OPEN_CONFIRM', payload: false})

    const closeAlert = () => dispatch({type: 'OPEN_ALERT', payload: false})
    
    const openAddCharacter = () => dispatch({type: 'OPEN_ADD_CHARACTER', payload: true})

    const closeAddCharacter = () => dispatch({type: 'OPEN_ADD_CHARACTER', payload: false})

    return(
        <PeopleContext.Provider value={{
            state,
            getCharacters,
            addCharacter,
            openConfirm,
            closeConfirm,
            deleteCharacter,
            closeAlert,
            handleChangeSearch,
            openAddCharacter,
            closeAddCharacter
        }}>
            {props.children}
        </PeopleContext.Provider>
    )
}

export default PeopleProvider