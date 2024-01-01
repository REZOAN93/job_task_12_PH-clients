'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as JotaiProvider, createStore } from 'jotai'
import { ReactNode, useState } from 'react'
import { Provider } from 'react-redux'

import { storeRedux } from '@/store/store'

export const store = createStore()

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <JotaiProvider store={store}>
      <Provider store={storeRedux}>
        <QueryClientProvider client={queryClient}>
          {children}
          {process.env.NODE_ENV !== 'production' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </Provider>
    </JotaiProvider>
  )
}
