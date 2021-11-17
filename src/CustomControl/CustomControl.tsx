import {
  CustomControlProps as CoreCustomControlProps,
  useCustomControlProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'

type AnyReactProps = React.DetailedHTMLProps<React.InputHTMLAttributes<any>, any>
export type CustomControlProps = CoreCustomControlProps & AnyReactProps

const CustomControl: React.FC<CustomControlProps> = ({
  name,
  render,
  incomingDataFormatter,
  outgoingDataFormatter,
  applyLocally,
  formatInitialValue,
  ...inputProps
}) => {
  const parameters = {
    incomingDataFormatter,
    outgoingDataFormatter,
    applyLocally,
    formatInitialValue,
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
