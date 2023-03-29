import { CustomizableLayout } from '@concrete-form/core'

import { LabelledControlProps } from '../LabelledControl/LabelledControl'

export type LabelledControlLayoutProps = LabelledControlProps

const LabelledControl: React.FC<LabelledControlLayoutProps> = (props) => {
  const {
    control,
    label,
    labelPosition = 'top',
    mainContainerProps,
    labelContainerProps,
    controlContainerProps,
  } = props
  const classNames = [
    'concreteform-labelled-control',
    `concreteform-${String(labelPosition)}`,
  ]

  return (
    <CustomizableLayout type="labelledControl" props={props}>
      <div data-testid="labelled-control" className={classNames.join(' ')} {...mainContainerProps}>
        <div {...controlContainerProps}>{ control }</div>
        <div {...labelContainerProps}>{ label }</div>
      </div>
    </CustomizableLayout>
  )
}

export default LabelledControl
