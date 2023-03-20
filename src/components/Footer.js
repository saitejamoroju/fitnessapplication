import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import Logo1 from '../assets/images/Logo1.png';
const Footer = () => {
  return (
    <Box
    mt="80px" 
    bgcolor="#0c0c0d">
      <Stack gap="40px" alignItems="center" px="40px"
      pt="24px" >
        <img src={Logo1} alt="logo" width="230px" height="100px"  />
      <Typography variant="h5" pb="40px" pt="-50px">
      All right Reserved &copy; FITNESS

      </Typography>
      </Stack>


    </Box>
  )
}

export default Footer