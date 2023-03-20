import React from 'react'
import { Typography, Box, Stack } from '@mui/material';

const ExerciseVideos = ({exerciseVideos,name}) => {
  // console.log(ExerciseVideos);
  if (!exerciseVideos.length) return 'Loading...';
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
<Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} color="#fff" mb="33px">
        Watch <span style={{ color: 'yellow', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, 
      gap: { lg: '110px', xs: '0px' } }} 
      justifyContent="flex-start" 
      flexWrap="wrap" 
      alignItems="center">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?video=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnail[0].url} 
            alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}  
        
        
        </Stack>


    </Box>
    
    )
}

export default ExerciseVideos