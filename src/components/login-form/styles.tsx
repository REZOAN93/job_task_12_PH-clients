import { w } from 'windstitch'

import { clmx } from '@/utils'

export const Div1 = w.div(
  clmx(
    'bg-grey-600 min-h-screen h-full flex items-center justify-center font-sans'
  )
)

export const Div2 = w.div(clmx('w-full max-w-md p-4 rounded-xl'))

export const LoginHeaderDiv = w.div(
  clmx('flex flex-col justify-center items-center gap-3 mb-3')
)

export const P1 = w.div(clmx('text-md font-bold text-grey'))

export const H1 = w.div(clmx('text-4xl font-bold text-grey'))

export const LoginButton = w.div(
  clmx(
    'w-full rounded-2xl bg-gray-50 text-black font-bold px-4 py-2 text-center mt-4'
  )
)
