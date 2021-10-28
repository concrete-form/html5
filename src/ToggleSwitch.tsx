import React from 'react'
import { ToggleSwitchProps, useCustomControlProps } from '@concrete-form/core'

import Control from './layout/Control'
import ControlLabel from './layout/ControlLabel'

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
      <ControlLabel label={label} labelPosition={labelPosition}>

        <label className="concreteform-toggle-switch">
          <input {...props} />
          <div className="concreteform-toggle-switch-slider" />
        </label>

      </ControlLabel>
    </Control>
  )
}

export default ToggleSwitch
