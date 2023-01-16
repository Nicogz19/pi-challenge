export default function PeopleReducer (state, action) {
    switch (action.type) {
        case 'GET_CHARACTERS_SUCCESSFULLY':
            return { 
                ...state, 
                characters: action.payload,
                loading: false,
                error: null
            }
        case 'GET_CHARACTERS_ERROR':
            return { 
                ...state, 
                error: action.payload,
                loading: false
            }
        case 'ADD_CHARACTER':
            state.characters.push(action.payload)
            return { 
                ...state,
                openAddCharacter: false,
                openAlert: true,
                addCharacter: true,
            }
        case 'CHARACTER_TO_DELETE':
            return { 
                ...state, 
                characterToDelete: action.payload, 
            }
        case 'DELETE_CHARACTER':
            // con el metodo filter saco del array de characters al personaje que se haya seleccionado para eliminar
            const charactersToShow = state.characters.filter((c) => c.name !== state.characterToDelete)
            return { 
                ...state, 
                characters: charactersToShow,
                openConfirm: false,
                openAlert: true,
                addCharacter: false
            }
        case 'CHANGE_SEARCH':
            return { 
                ...state, 
                searchValue: action.payload,
            }
        case 'OPEN_ALERT':
            return { 
                ...state,
                openAlert: action.payload
            }
        case 'OPEN_CONFIRM':
            return { 
                ...state,
                openConfirm: action.payload
            }
        case 'OPEN_ADD_CHARACTER':
            return { 
                ...state,
                openAddCharacter: action.payload
            }
        default:
            return state;
    }
}