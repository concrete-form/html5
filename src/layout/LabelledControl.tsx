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
  const { className: customClassName, ...containerProps } = mainContainerProps ?? {}

  const containerClassName = [
    'concreteform-labelled-control',
    `concreteform-${String(labelPosition)}`,
    customClassName,
  ].filter(c => !!c).join(' ')

  return (
    <CustomizableLayout type="labelledControl" props={props}>
      <div data-testid="labelled-control" {...containerProps} className={containerClassName}>
        <div {...controlContainerProps}>{ control }</div>
        <div {...labelContainerProps}>{ label }</div>
      </div>
    </CustomizableLayout>
  )
}

export default LabelledControl
