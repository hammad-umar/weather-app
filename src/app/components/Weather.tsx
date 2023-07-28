'use client'

import { FC, useState, SyntheticEvent } from 'react'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import { useLazyGetWeatherDetailsQuery } from '@/redux/weatherApi'
import Loader from './UI/Loader'
import WeatherCard from './WeatherCard'
import WeatherForm from './WeatherForm'
import WeatherHeader from './WeatherHeader'
import { COLORS } from '@/constants/colors'
import { ISnackBar } from '@/types'
import { colors } from '@mui/material'

const Weather: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [alert, setAlert] = useState<ISnackBar>({
    open: false,
    message: '',
    bgColor: '',
  })

  const [getWeatherDetails, { isLoading, data, isFetching }] =
    useLazyGetWeatherDetailsQuery()

  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setAlert({
      ...alert,
      open: false,
    })
  }

  const onSubmitHandler = (): void => {
    if (!searchTerm) {
      setAlert({
        open: true,
        message: 'City is required',
        bgColor: colors.red.A400,
      })
      return
    }

    getWeatherDetails({ searchTerm })
      .unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        setAlert({
          open: true,
          message: err.data.error.message,
          bgColor: colors.red.A400,
        })
      })

    setSearchTerm('')
  }

  return (
    <Grid
      bgcolor={COLORS.DARK_COLOR}
      container
      flexDirection='column'
      alignItems='center'
      height='100vh'
      justifyContent='center'
      gap={2}
    >
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={alert.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{
          style: {
            backgroundColor: alert.bgColor,
            fontWeight: 'bold',
          },
        }}
      />
      {/* Weather Header Component */}
      <WeatherHeader />

      {/* Weather form with input and button */}
      <WeatherForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmitHandler={onSubmitHandler}
      />

      {/* Weather Card with weather location, icon and condition */}
      {isLoading || isFetching ? (
        <Loader />
      ) : !isLoading && !isFetching && data ? (
        <WeatherCard data={data} />
      ) : null}
    </Grid>
  )
}

export default Weather
