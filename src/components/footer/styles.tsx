import { w } from 'windstitch'

import { clmx } from '@/utils'

export const Footer = w.div(
  clmx(' sticky bg-slate-700 text-slate-200 text-sm mt-16')
)
export const FooterList = w.div(
  clmx('w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2')
)
