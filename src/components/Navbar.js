import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo1 from '../assets/images/Logo1.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo1} alt="logo1" style={{ width: '180px', height: '100px', margin: '2px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', borderBottom: '3px solid yellow', fontFamily:"monospace" }}>HOME</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white',fontFamily:"monospace" }}>EXERCISES</a>
    </Stack>
  </Stack>
);

export default Navbar;