import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 'd140ac231f174ed7838193559232807'

interface IGetWeatherDetailsRequest {
  searchTerm: string
}

interface IGetWeatherDetailsResponse {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  current: {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
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
