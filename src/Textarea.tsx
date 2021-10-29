import React from 'react'
import { TextareaProps, useControlProps } from '@concrete-form/core'

import Control from './layout/Control'

const Textarea: React.FC<TextareaProps> = ({
  name,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <Control name={name}>
      <textarea {...props} />
    </Control>
  )
}

export default Textarea
