import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

import { Typography, Box, Stack } from '@mui/material';
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }} >

<Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="white" mb="33px" mt="10px">
      Similar <span style={{ color: 'yellow', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>





      {/* <Typography mb={6} variant="h3"
      >Exercises that target the same muscle group</Typography>
      <Stack direction="row"
        sx={{p:'2',position:'relative'}}>
          {targetMuscleExercises.length?
           <HorizontalScrollbar data={targetMuscleExercises}/>
           :<Loader/>
          }
        </Stack> */}
        {/* <Typography mb={6} variant="h3"
      >Exercises that use the same Equipment </Typography>
      <Stack direction="row"
        sx={{p:'2',position:'relative'}}>
          {equipmentExercises.length?
           <HorizontalScrollbar data={equipmentExercises}/>
           :<Loader/>
          }
        </Stack> */}


<Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="white" mb="33px">
      Similar <span style={{ color: 'Yellow', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
    </Box>
  )
}

export default SimilarExercises