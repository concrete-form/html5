import { LabelLayoutProps, CustomizableLayout } from '@concrete-form/core'

const Label: React.FC<LabelLayoutProps> = (props) => {
  const {
    label,
    htmlFor,
  } = props
  return (
    <CustomizableLayout type="label" props={props}>
      <label
        className="concreteform-label"
        htmlFor={htmlFor}
      >
        { label }
      </label>
    </CustomizableLayout>
  )
}

export default Label
