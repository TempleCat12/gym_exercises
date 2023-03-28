import React from 'react'
import { Box,Stack, Typography } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt='detail-gif' className='detail-image' loading='lazy' />
      <Stack sx={{ gap: {lg: '30px', xs: '20px'}}}>
        <Typography variant='h3' sx={{ fontSize: { lg: '64px', xs: '30px'}}} fontWeight={700} textTransform='capitalize'>{name}</Typography>
        <Typography sx={{fontSize: { lg: '24px', xs: '18px'}}} color='#4f4fc4c'>
          Exercises keep you strong.{' '}
          <span style={{textTransform: 'capitalize', borderBottom: '2px solid rgb(255, 38, 37)'}}>{name}</span> {' '}bup is one of the best 
          <br/>exercise to target your {target}. It will help you improve your {' '}
          <br/> mood and gain energy.
        </Typography>
        <Stack gap='10px'>
          {extraDetails?.map((item) => (
            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
              <img src={item.icon} alt='detail-icon' style={{width: '50px', height: '50px '}}/>
              <Typography textTransform='capitalize' sx={{ fontSize: { lg: '30px', xs: '20px'}}}>{item.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Detail