import {
  LabelledControlProps as CoreLabelledControlProps,
  useControlLabelFor,
} from '@concrete-form/core'

import LabelledControlLayout from '../layout/LabelledControl'
import Label from '../layout/Label'

type ReactDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type LabelledControlProps = CoreLabelledControlProps & {
  mainContainerProps?: ReactDivProps
  labelContainerProps?: ReactDivProps
  controlContainerProps?: ReactDivProps
}

const LabelledControl: React.FC<LabelledControlProps> = ({
  label,
  labelPosition,
  children,
  mainContainerProps,
  labelContainerProps,
  controlContainerProps,
}) => {
  const htmlFor = useControlLabelFor(children)
  return (
    <LabelledControlLayout
      label={<Label label={label} htmlFor={htmlFor} />}
      labelPosition={labelPosition}
      control={children}
      mainContainerProps={mainContainerProps}
      labelContainerProps={labelContainerProps}
      controlContainerProps={controlContainerProps}
    />
  )
}

export default LabelledControl
