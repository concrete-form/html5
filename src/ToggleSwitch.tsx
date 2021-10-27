import React, { useEffect } from 'react'
import { ToggleSwitchProps, useControlProps, useControlState, useControlActions, mergeEventHandlers } from '@concrete-form/core'

import Control from './layout/Control'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  name,
  ...inputProps
}) => {
  const { value } = useControlState(name)
  const props = useControlProps(name, inputProps)
  const { setFieldValue } = useControlActions(name)

  useEffect(() => {
    if (value === undefined) {
      setFieldValue(false, false, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(!event.target.checked, true, true)
  }

  return (
    <Control name={name}>
      <input
        {...props}
        onChange={mergeEventHandlers(inputProps.onChange, onChange)}
        onBlur={inputProps.onBlur ?? (() => {})}
        type="checkbox"
        checked={!!value}
      />
    </Control>
  )
}

export default ToggleSwitch
