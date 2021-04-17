import { init } from '../utils/sentry'
import type { AppProps } from 'next/app'

init()

interface AppPropsWithError extends AppProps {
  err: Error
}

export default function App({
  Component,
  pageProps,
  err,
}: AppPropsWithError): JSX.Element {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return <Component {...pageProps} err={err} />
}
