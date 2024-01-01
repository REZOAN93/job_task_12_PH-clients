import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clmx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// Clsx is a simple JavaScript utility for conditionally joining classes together.
// It makes our lives easier by giving us syntactic sugar to handle complex styles for CSS solutions like CSS modules, or Tailwind CSS.
//💡 This library is the same as Classnames but has a smaller bundle size and better performance.
