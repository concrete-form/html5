import { InputProps, useControlProps } from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'

const Input: React.FC<InputProps> = ({
  name,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <ControlWithErrors name={name}>
      <input {...props} />
    </ControlWithErrors>
  )
}

export default Input
