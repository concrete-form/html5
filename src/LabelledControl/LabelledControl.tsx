import { LabelledControlProps, useControlLabelFor } from '@concrete-form/core'
import LabelledControlLayout from '../layout/LabelledControl'
import Label from '../layout/Label'

const Labelledcontrol: React.FC<LabelledControlProps> = ({
  label,
  labelPosition,
  children,
}) => {
  const htmlFor = useControlLabelFor(children)
  return (
    <LabelledControlLayout
      label={<Label label={label} htmlFor={htmlFor} />}
      labelPosition={labelPosition}
      control={children}
    />
  )
}

export default Labelledcontrol
