import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function fontApp() {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
