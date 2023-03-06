import '@/styles/globals.css'
import THEME_DATA from '@/themes/theme_data'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={THEME_DATA}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
