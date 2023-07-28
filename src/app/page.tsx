import { Metadata, NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Weather App',
}

export default HomePage
