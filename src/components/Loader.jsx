import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack justifyContent='center' alignItems='center' width='100%'>
        <InfinitySpin />
    </Stack>
  )
}

export default Loader