import React from 'react'
import { SliderProps } from '@concrete-form/core'

import Input from './Input'

const Slider: React.FC<SliderProps> = ({
  ...inputProps
}) => <Input {...inputProps} type="range" />

export default Slider
