import { LabelledControlLayoutProps, CustomizableLayout } from '@concrete-form/core'

export type { LabelledControlLayoutProps } from '@concrete-form/core'

const LabelledControl: React.FC<LabelledControlLayoutProps> = (props) => {
  const {
    control,
    label,
    labelPosition = 'left',
  } = props
  const classNames = [
    'concreteform-labelled-control',
    `concreteform-${labelPosition}`,
  ]

  return (
    <CustomizableLayout type="labelledControl" props={props}>
      <div data-testid="labelled-control" className={classNames.join(' ')}>
        { control }
        { label }
      </div>
    </CustomizableLayout>
  )
}

export default LabelledControl
