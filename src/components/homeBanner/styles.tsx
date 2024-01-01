import { w } from 'windstitch'

import { clmx } from '@/utils'

export const Div1 = w.div(
  clmx('relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8')
)
export const Div2 = w.div(
  clmx(
    'mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'
  )
)
export const Div3 = w.div(clmx('mb-8 md:mb-0 text-center'))
export const Header1 = w.div('text-4xl md:text-6xl font-bold text-white mb-4')
export const Paragraph1 = w.div('text-lg md:text-xl text-white mb-2')
export const Paragraph2 = w.div(
  'text-2xl md:text-5xl text-yellow-400 font-bold'
)
export const ImageDiv = w.div('w-1/3 relative aspect-video')
