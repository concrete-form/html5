import React, { useMemo } from 'react'
import {
  CheckboxProps,
  useControlProps,
  parseCheckboxOptions,
} from '@concrete-form/core'

import Control from './layout/Control'
import ItemsGroup from './layout/ItemsGroup'
import ItemLabel from './layout/ItemLabel'

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  options,
  orientation,
  labelPosition,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseCheckboxOptions(options, children), [options, children])

  return (
    <Control name={name}>
      <ItemsGroup orientation={orientation}>
        { parsedOptions.map(({ label, value, props: checkboxProps }) => (
          <ItemLabel key={value} label={label} labelPosition={labelPosition}>
            <input value={value} {...props} {...checkboxProps} type="checkbox" />
          </ItemLabel>
        )) }
        { children }
      </ItemsGroup>
    </Control>
  )
}

export default Checkbox
