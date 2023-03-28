import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack } from '@mui/material'

import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' px='20px' sx={{ gap: {sm: '123px', xs: '40px'}, mt: { sm: '40px', xs: '20px' }, justifyContent: 'none'}}>
      <Link to="/" >
        <img src={logo} alt='icon' style={{ width: '48px', height: '48px', margin: '0px 20px'}}/>
      </Link>
      <Stack
        direction='row'
        alignItems='center'
        gap='40px'
        fontSize='24px'
        fontFamily='Alegreya'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid #ff2625'}}>Home</Link>
        <a href='#exercise' style={{ textDecoration: 'none', color: '#3a1212'}}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar