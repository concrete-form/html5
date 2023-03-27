import { ControlLayoutProps, CustomizableLayout } from '@concrete-form/core'

export type { ControlLayoutProps } from '@concrete-form/core'

const Control: React.FC<ControlLayoutProps> = (props) => {
  const {
    control,
    errors,
  } = props
  return (
    <CustomizableLayout type="control" props={props}>
      <div className="concreteform-control">
        { control }
        { errors }
      </div>
    </CustomizableLayout>
  )
}

export default Control
