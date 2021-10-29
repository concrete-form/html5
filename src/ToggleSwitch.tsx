import React from 'react'
import { ToggleSwitchProps, useCustomControlProps } from '@concrete-form/core'

import Control from './layout/Control'
import ItemLabel from './layout/ItemLabel'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  name,
  applyInitialValue = false,
  label,
  labelPosition,
  ...inputProps
}) => {
  const incomingDataFormatter = (value?: boolean) => !!value
  const outgoingDataFormatter = (value: string) => !!value

  const props = useCustomControlProps(name, {
    incomingDataFormatter,
    outgoingDataFormatter,
    formatInitialValue: applyInitialValue,
  }, {
    ...inputProps,
    type: 'checkbox',
  })

  return (
    <Control name={name}>
      <ItemLabel label={label} labelPosition={labelPosition}>
        <label className="concreteform-toggle-switch">
          <input {...props} />
          <div className="concreteform-toggle-switch-slider" />
        </label>
      </ItemLabel>
    </Control>
  )
}

export default ToggleSwitch
