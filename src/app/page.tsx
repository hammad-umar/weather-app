import { Metadata, NextPage } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const HomePage: NextPage = () => {
  return (
    <Box>
      <Typography variant='h3'>Home Page</Typography>
    </Box>
  )
}

export const metadata: Metadata = {
  title: 'Weather App',
}

export default HomePage
