import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react'

const load = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const BoxStyled = styled(Box)(() => ({
    margin: '250px auto',
    border: '4px solid rgba(0,0,0,0.1)',
    width: 50,
    height: 50,
    borderRadius: '50%',
    borderLeftColor: '#1976d2',
    animation: `${load} 1s linear infinite`
}))

const Loader = () => {
    return (
        <BoxStyled />
    )
}

export default Loader