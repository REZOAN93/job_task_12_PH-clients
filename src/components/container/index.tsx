import React, { FC } from 'react'

import { Div } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <Div>{children}</Div>
}

export default Container
