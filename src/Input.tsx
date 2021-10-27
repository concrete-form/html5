import React from 'react'
import { InputProps, useControlProps } from '@concrete-form/core'

import Control from './layout/Control'

const Input: React.FC<InputProps> = ({
  name,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <Control name={name}>
      <input
        {...props}
      />
    </Control>
  )
}

export default Input
