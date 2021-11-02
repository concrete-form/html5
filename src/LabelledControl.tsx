import { LabelledcontrolProps, useControlLabelFor } from '@concrete-form/core'
import LabelledControlLayout from './layout/LabelledControl'
import Label from './layout/Label'

const Labelledcontrol: React.FC<LabelledcontrolProps> = ({
  label,
  children,
}) => {
  const htmlFor = useControlLabelFor(children)
  return (
    <LabelledControlLayout
      label={<Label label={label} htmlFor={htmlFor} />}
      control={children}
    />
  )
}

export default Labelledcontrol
