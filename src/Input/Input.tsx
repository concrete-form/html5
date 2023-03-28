import { InputProps as CoreInputProps, useControlProps } from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type InputProps = CoreInputProps & ReactInputProps

const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <ControlWithErrors name={name}>
      <input type={type} {...props} />
    </ControlWithErrors>
  )
}

export default Input
