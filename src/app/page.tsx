import { Metadata, NextPage } from 'next'
import Weather from './components/Weather'

const HomePage: NextPage = () => {
  return <Weather />
}

export const metadata: Metadata = {
  title: 'Weather App',
}

export default HomePage
