import { ItemLabelLayoutProps, CustomizableLayout } from '@concrete-form/core'

const ItemLabel: React.FC<ItemLabelLayoutProps> = (props) => {
  const {
    control,
    label,
    labelPosition = 'right',
  } = props
  const classNames = [
    'concreteform-item-label',
    `concreteform-${labelPosition}`,
  ]

  return (
    <CustomizableLayout type="itemLabel" props={props}>
      <label className={classNames.join(' ')}>
        <div>{ control }</div>
        <div>{ label }</div>
      </label>
    </CustomizableLayout>
  )
}

export default ItemLabel
