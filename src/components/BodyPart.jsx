import React from 'react'
import { Stack, Typography } from '@mui/material'

import gym from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: item === bodyPart ? '4px solid #FF2625' : 'none',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1300, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={gym} alt='gym-icon' style={{width: '40px', height: '40px'}} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart