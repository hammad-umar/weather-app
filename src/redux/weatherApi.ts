import { ICurrent, ILocation } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IGetWeatherDetailsRequest {
  searchTerm: string
}

interface IGetWeatherDetailsResponse {
  location: ILocation
  current: ICurrent
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getWeatherDetails: builder.query<
      IGetWeatherDetailsResponse,
      IGetWeatherDetailsRequest
    >({
      query: ({ searchTerm }) => ({
        method: 'GET',
        url: `/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${searchTerm}&aqi=no`,
      }),
    }),
  }),
})

export const { useLazyGetWeatherDetailsQuery } = weatherApi
