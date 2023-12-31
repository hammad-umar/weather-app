'use client'

import { FC } from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ICurrent, ILocation } from '@/types'
import { COLORS } from '@/constants/colors'
import { colors } from '@mui/material'

type Props = {
  data: {
    location: ILocation
    current: ICurrent
  }
}

const WeatherCard: FC<Props> = ({ data }) => {
  return (
    <Card
      sx={{
        bgcolor: 'transparent',
        opacity: 0.8,
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}
    >
      <CardContent>
        <Grid container alignItems='center' gap={12}>
          <Grid item>
            <Typography color={COLORS.WHITE_COLOR} variant='h6'>
              {data.location.name}
              {', '}
              {data.location.region}
              {', '}
              {data.location.country}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color={COLORS.WHITE_COLOR}
              fontSize={18}
              variant='subtitle1'
            >
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
            <Typography
              variant='subtitle1'
              fontStyle='italic'
              color={colors.blue[700]}
            >
              &quot;{data.current.condition.text}&quot;
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
