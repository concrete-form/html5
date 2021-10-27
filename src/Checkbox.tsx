import React, { useMemo } from 'react'
import {
  CheckboxProps,
  useControlProps,
  parseCheckboxOptions,
} from '@concrete-form/core'

import Control from './layout/Control'
import OptionsGroup from './layout/OptionsGroup'
import ControlLabel from './layout/ControlLabel'

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  options,
  single = false,
  orientation = 'vertical',
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseCheckboxOptions(options, children), [options, children])

  return (
    <Control name={name}>
      <OptionsGroup>
        { parsedOptions.map(({ label, value, props: checkboxProps }) => (
          <ControlLabel key={value} label={label}>
            <input value={value} {...props} {...checkboxProps} type="checkbox" />
          </ControlLabel>
        )) }
        { children }
      </OptionsGroup>
    </Control>
  )
}

export default Checkbox
