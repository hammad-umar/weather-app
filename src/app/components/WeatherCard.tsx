'use client'

import { FC } from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ICurrent, ILocation } from '@/types'

type Props = {
  data: {
    location: ILocation
    current: ICurrent
  }
}

const WeatherCard: FC<Props> = ({ data }) => {
  return (
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
        <Grid container justifyContent='center' alignItems='center' gap={5}>
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
  )
}

export default WeatherCard
