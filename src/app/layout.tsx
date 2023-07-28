import { Providers } from '@/redux/Providers'
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <ThemeRegistry>
        <html lang='en'>
          <body>{children}</body>
        </html>
      </ThemeRegistry>
    </Providers>
  )
}
