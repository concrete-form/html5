import { CustomControlProps, useCustomControlProps } from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'

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
    <ControlWithErrors name={name}>
      { renderComponent({ ...props }) }
    </ControlWithErrors>
  )
}

export default CustomControl
