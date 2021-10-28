import React from 'react'
import { CustomControlProps, useCustomControlProps } from '@concrete-form/core'

import Control from './layout/Control'

const CustomControl: React.FC<CustomControlProps> = ({
  name,
  render,
  incomingDataFormatter,
  outgoingDataFormatter,
  applyLocally,
  formatInitialValue,
  validateInitialValue,
  ...inputProps
}) => {
  const parameters = {
    incomingDataFormatter,
    outgoingDataFormatter,
    applyLocally,
    formatInitialValue,
    validateInitialValue,
  }
  const props = useCustomControlProps(name, parameters, inputProps)
  const renderComponent = render ?? (props => <input {...props} />)

  return (
    <Control name={name}>
      { renderComponent({ ...props }) }
    </Control>
  )
}

export default CustomControl
