import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [ search, setSearch ] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async() => {
      const resp = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
      setBodyParts(resp);
    }
    fetchExerciseData()
  },[])

  const handleSearch = async() => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
      console.log(exerciseData);
      const results = exerciseData.filter((exercise) => {
        return exercise.bodyPart.toLowerCase().includes(search)
        || exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
      })

      setExercises(results);
    }
  }

  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      mt='37px'
      p='20px'
    >
      <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '30px'}}} textAlign='center' mb='49px'>
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Exercises'
          type='text'
          height='76px'
          sx={{
            width: {lg: '1170px', xs: '450px'},
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
        />
        <Button className='search-button' 
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '173px', xs: '80px'},
            height: '56px',
            position: 'absolute',
            right: '0',
            fontSize: {lg: '20px', xs: '14px'},
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', p: '20px', width: '100%'}}>
        {bodyParts.length > 0 
          ? <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
          : <Loader />
        }
      </Box>
    </Stack>
  )
}

export default SearchExercises