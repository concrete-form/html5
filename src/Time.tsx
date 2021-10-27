import React from 'react'
import { TimeProps } from '@concrete-form/core'

import Input from './Input'

const Time: React.FC<TimeProps> = ({
  ...inputProps
}) => <Input {...inputProps} type="time" />

export default Time
