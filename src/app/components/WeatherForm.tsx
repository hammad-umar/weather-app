import { Dispatch, FC, SetStateAction } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { COLORS } from '@/constants/colors'

type Props = {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  onSubmitHandler: () => void
}

const WeatherForm: FC<Props> = ({
  searchTerm,
  setSearchTerm,
  onSubmitHandler,
}) => {
  return (
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
            borderColor: COLORS.WHITE_COLOR,
            color: COLORS.WHITE_COLOR,
          }}
          variant='outlined'
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default WeatherForm
