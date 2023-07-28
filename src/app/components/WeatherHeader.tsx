'use client'

import { COLORS } from '@/constants/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const WeatherHeader = () => {
  return (
    <Box>
      <Typography
        color={COLORS.WHITE_COLOR}
        sx={{ textDecorationLine: 'underline' }}
        variant='h3'
      >
        Weather Checker
      </Typography>
    </Box>
  )
}

export default WeatherHeader
