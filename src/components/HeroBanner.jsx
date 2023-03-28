import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import banner from '../assets/images/banner.png'
import { padding, positions } from '@mui/system'


const HeroBanner = () => {
  return (
    <Box sx={{mt: {mt: '212px', xs: '70px'}, ml: {sm: '50px'}}} positions='relative' padding='20px'>
      <Typography fontSize='26px' fontWeight={600} color='#FF2625'>Fitness Club</Typography>
      <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
        Sweat, Smile <br/>
        And Repeat
      </Typography>
      <Typography fontFamily='Alegreya' fontSize='22px' lineHeight='35px'>
        Check out the most effective exercises <br/> personalized to you
      </Typography>
      <Stack>
        <a href='#exercises' style={{ textDecoration: 'none', width: '220px', textAlign: 'center', backgroundColor: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius:'4px'}}>Explore Exercises</a>
      </Stack>
      <Typography lineHeight={1} fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>Exercise</Typography>
      <img src={banner} alt='hero-banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner