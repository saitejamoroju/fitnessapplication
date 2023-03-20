import React from 'react'
import {Stack } from '@mui/material';
import { BallTriangle } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Stack direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    className="load"
    >
        <BallTriangle color="yellow" />

    </Stack>
  )
}

export default Loader