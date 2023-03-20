import React from 'react';
import {Box,Stack,Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">  
  <Typography className="color" fontWeight="800" fontSize="30px" color="crimson" fontFamily="monospace">
        Exercise Club
    </Typography>
    <Typography fontFamily="monospace" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">        Sweat, Smile <br/> and Repeat 
    </Typography >
    <Typography fontSize="22px" lineHeight="35px" mb={4} fontFamily="monospace"> 
        Check out the different types of Exercises
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '25px', textDecoration: 'none',fontFamily:'monospace', width: '200px', textAlign: 'center', background: '#FFFFFF', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'black', borderRadius: '8px' }}>Explore More</a>
    </Stack>
    <Typography fontWeight={600} color="rgb(185, 185, 185)" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img'/>
   </Box>
  )
}

export default HeroBanner