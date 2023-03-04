import { globalStyles } from '@styles/stiches.config';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
      <Component {...pageProps} />
  )
}