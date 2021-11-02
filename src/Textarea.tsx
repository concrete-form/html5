import { TextareaProps, useControlProps } from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'

const Textarea: React.FC<TextareaProps> = ({
  name,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <ControlWithErrors name={name}>
      <textarea {...props} />
    </ControlWithErrors>
  )
}

export default Textarea
