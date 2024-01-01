// "use client";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Provider as JotaiProvider, createStore } from "jotai";

// export const store = createStore();

// export default function Provider({ children }: { children: React.ReactNode }) {
//   const queryClient = new QueryClient();

//   return (
//     <JotaiProvider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <ReactQueryDevtools initialIsOpen={false} />
//         {children}
//       </QueryClientProvider>
//     </JotaiProvider>
//   );
// }

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as JotaiProvider, createStore } from 'jotai'
import { ReactNode, useState } from 'react'

export const store = createStore()

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <JotaiProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        {process.env.NODE_ENV !== 'production' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </JotaiProvider>
  )
}
