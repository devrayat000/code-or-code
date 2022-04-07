import { isProd } from '$lib/lib/env'
import { QueryCache, QueryClient } from 'react-query'

const queryCache = new QueryCache()

export function createQueryClient(cache = queryCache) {
  return new QueryClient({
    queryCache: cache,
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: isProd(),
      },
    },
  })
}
