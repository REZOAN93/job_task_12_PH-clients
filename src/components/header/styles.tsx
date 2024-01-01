import { w } from 'windstitch'

import { clmx } from '@/utils'

export const Div1 = w.div(
  clmx('sticky top-0 w-full bg-slate-200 z-30 shadow-sm')
)
export const Div2 = w.div(clmx('py-4 border-b-[1px]'))
export const Div3 = w.div(
  clmx('flex items-center justify-between gap-3 md:gap-0')
)
export const CartCountDiv = w.div(
  clmx('flex items-center justify-between ')
)
export const DivSearch = w.div('hidden md:block')
export const Div4 = w.div('flex items-center gap-8 md:gap-12')
