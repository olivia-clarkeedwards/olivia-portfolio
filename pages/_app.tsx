import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Lexend, Roboto } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
const roboto100 = Roboto({
  subsets: ['latin'],
  weight: '100',
  variable: '--font-roboto100',
})
const roboto700 = Roboto({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-roboto700',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
