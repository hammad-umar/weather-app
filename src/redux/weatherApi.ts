import { ICurrent, ILocation } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 'd140ac231f174ed7838193559232807'

interface IGetWeatherDetailsRequest {
  searchTerm: string
}

interface IGetWeatherDetailsResponse {
  location: ILocation
  current: ICurrent
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.weatherapi.com/v1' }),
  endpoints: (builder) => ({
    getWeatherDetails: builder.query<
      IGetWeatherDetailsResponse,
      IGetWeatherDetailsRequest
    >({
      query: ({ searchTerm }) => ({
        method: 'GET',
        url: `/current.json?key=${API_KEY}&q=${searchTerm}&aqi=no`,
      }),
    }),
  }),
})

export const { useLazyGetWeatherDetailsQuery } = weatherApi
