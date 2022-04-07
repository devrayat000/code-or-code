import { NextPage } from 'next'
import { DehydratedState, Hydrate, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import type { AppProps } from 'next/app'

import { createQueryClient } from '$lib/modules/react-query'

import '../styles/globals.css'

const MyApp: NextPage<MyAppProps> = ({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}) => {
  const [client] = useState(createQueryClient)

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

interface MyAppProps extends AppProps {
  pageProps: {
    dehydratedState?: DehydratedState
  }
}
