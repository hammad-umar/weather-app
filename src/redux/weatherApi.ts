import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getWeatherDetails: builder.query({
      query: () => ({
        method: 'GET',
        url: ``,
      }),
    }),
  }),
})

export const { useLazyGetWeatherDetailsQuery } = weatherApi
