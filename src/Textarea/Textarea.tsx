import {
  TextareaProps as CoreTextareaProps,
  useControlProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'

type ReactTextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
export type TextareaProps = CoreTextareaProps & ReactTextareaProps

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
