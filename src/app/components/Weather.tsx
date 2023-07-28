'use client'

import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useLazyGetWeatherDetailsQuery } from '@/redux/weatherApi'
import Image from 'next/image'
import Loader from './UI/Loader'

const Weather: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const [getWeatherDetails, { isLoading, data }] =
    useLazyGetWeatherDetailsQuery()

  const onSubmitHandler = (): void => {
    if (!searchTerm) {
      alert('City is required!')
      return
    }

    getWeatherDetails({ searchTerm })
      .unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    setSearchTerm('')
  }

  return (
    <Grid
      bgcolor='#333'
      container
      flexDirection='column'
      alignItems='center'
      height='100vh'
      justifyContent='center'
      gap={2}
    >
      <Box>
        <Typography
          color='#f3f3f3'
          sx={{ textDecorationLine: 'underline' }}
          variant='h3'
        >
          Weather Checker
        </Typography>
      </Box>
      <Grid container justifyContent='center' alignItems='center' gap={10}>
        <Grid item>
          <TextField
            variant='standard'
            label='Enter City'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius,
              borderColor: '#f3f3f3',
              color: '#f3f3f3',
            }}
            variant='outlined'
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <Loader />
      ) : !isLoading && data ? (
        <Box>
          <Card>
            <CardContent>
              <Grid container alignItems='center' gap={12}>
                <Grid item>
                  <Typography variant='h6'>
                    {data.location.name}
                    {', '}
                    {data.location.region}
                    {', '}
                    {data.location.country}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={18} variant='subtitle1'>
                    {data.current.feelslike_c}&deg; C
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                gap={5}
              >
                <Grid item>
                  <Image
                    src={`https://${data.current.condition.icon}`}
                    alt={data.current.condition.text}
                    width={100}
                    height={100}
                  />
                </Grid>
                <Grid item>
                  <Typography>{data.current.condition.text}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      ) : null}
    </Grid>
  )
}

export default Weather
