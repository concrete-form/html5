import React, { useMemo } from 'react'
import {
  RadioProps,
  useControlProps,
  parseRadioOptions,
} from '@concrete-form/core'

import Control from './layout/Control'
import ItemsGroup from './layout/ItemsGroup'
import ItemLabel from './layout/ItemLabel'

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
      <ItemsGroup orientation={orientation}>
        { parsedOptions.map(({ label, value, props: radioProps }) => (
          <ItemLabel key={value} label={label} labelPosition={labelPosition}>
            <input value={value} {...props} {...radioProps} type="radio" />
          </ItemLabel>
        )) }
        { children }
      </ItemsGroup>
    </Control>
  )
}

export default Radio
