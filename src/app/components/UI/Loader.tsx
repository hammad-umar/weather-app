'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Loader: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={40} />
    </Box>
  )
}

export default Loader
