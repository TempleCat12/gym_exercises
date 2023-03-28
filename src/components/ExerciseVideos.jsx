import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Loader from './Loader'

const ExerciseVideos = ({name, exerciseVideos}) => {

  if(!exerciseVideos.length) return <Loader />
  return (
    <Box sx={{marginTop: {lg: '130px', xs: '20px'}}} p='20px'>
      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}}} fontWeight={700} color='#000' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography >
      <Stack flexWrap='wrap' justifyContent='center' sx={{flexDirection: { lg: 'row', xs: 'column'}, gap: {lg: '30px', xs: '0px'}}}>
        {exerciseVideos?.slice(0,3)?.map((item, index) => (
          <a 
          key={index}
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          className='exercise-video'
          target='_blank'
          rel='noreferrer'
          >
            <img style={{borderTopLeftRadius: '20px'}} src={item.video.thumbnails[0].url} alt='video-thumbnail-image'/>
            <Box>
              <Typography sx={{fontSize: {lg : '28px', xs: '18px'}}} fontWeight={600} color="#000" >{item.video.title}</Typography>
              <Typography fontSize='14px' color='#000'>{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos