import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Lexend, Roboto } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lexend.style.fontFamily};
          font-weight: 100;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: ${roboto.style.fontFamily};
          font-weight: 100 | 200 | 700;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
