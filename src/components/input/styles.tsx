import { w } from 'windstitch'

import { clmx } from '@/utils'

export const InputLabelAndTextContainer = w.div(
  clmx('flex items-baseline justify-between')
)
export const InputBox = w.div(
  clmx(
    'box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6'
  )
)
