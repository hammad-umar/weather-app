import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './weatherApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loggerMiddleware } from './loggerMiddleware'

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware().concat([loggerMiddleware, weatherApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDisaptch = typeof store.dispatch
