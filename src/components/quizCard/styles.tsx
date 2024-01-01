import { w } from 'windstitch'

import { clmx } from '@/utils'

export const CardContainer = w.div(
  clmx('rounded overflow-hidden shadow-lg m-2')
)
export const NameAndDescriptionContainer = w.div(clmx('px-3 py-2'))
export const NamePTag = w.p(clmx('font-bold text-lg mb-2 line-clamp-1 wrap'))
export const DescriptionPTag = w.p(
  clmx('text-gray-700 text-base line-clamp-3 wrap h-19 pb-2')
)
export const PriceAndCartContainer = w.div(
  clmx('px-3 pt-4 pb-2 flex justify-between')
)

export const Div2 = w.div(
  clmx(
    'mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'
  )
)

export const PricePTag = w.div('')
