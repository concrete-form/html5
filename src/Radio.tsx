import React, { useMemo } from 'react'
import {
  RadioProps,
  useControlProps,
  parseRadioOptions,
} from '@concrete-form/core'

import Control from './layout/Control'
import OptionsGroup from './layout/OptionsGroup'
import ControlLabel from './layout/ControlLabel'

const Radio: React.FC<RadioProps> = ({
  name,
  children,
  options,
  orientation,
  labelPosition,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseRadioOptions(options, children), [options, children])

  return (
    <Control name={name}>
      <OptionsGroup orientation={orientation}>
        { parsedOptions.map(({ label, value, props: radioProps }) => (
          <ControlLabel key={value} label={label} labelPosition={labelPosition}>
            <input value={value} {...props} {...radioProps} type="radio" />
          </ControlLabel>
        )) }
        { children }
      </OptionsGroup>
    </Control>
  )
}

export default Radio
