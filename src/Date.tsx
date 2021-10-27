import React from 'react'
import { DateProps } from '@concrete-form/core'

import Input from './Input'

const Date: React.FC<DateProps> = ({
  ...inputProps
}) => <Input {...inputProps} type="date" />

export default Date
