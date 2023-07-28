'use client'

import { FC, useState } from 'react'
import Grid from '@mui/material/Grid'
import { useLazyGetWeatherDetailsQuery } from '@/redux/weatherApi'
import Loader from './UI/Loader'
import WeatherCard from './WeatherCard'
import WeatherForm from './WeatherForm'
import WeatherHeader from './WeatherHeader'
import { COLORS } from '@/constants/colors'

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
      bgcolor={COLORS.DARK_COLOR}
      container
      flexDirection='column'
      alignItems='center'
      height='100vh'
      justifyContent='center'
      gap={2}
    >
      {/* Weather Header Component */}
      <WeatherHeader />

      {/* Weather form with input and button */}
      <WeatherForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmitHandler={onSubmitHandler}
      />

      {/* Weather Card with weather location, icon and condition */}
      {isLoading ? (
        <Loader />
      ) : !isLoading && data ? (
        <WeatherCard data={data} />
      ) : null}
    </Grid>
  )
}

export default Weather
