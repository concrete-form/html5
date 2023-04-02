import { ItemLabelLayoutProps as CoreItemLabelLayoutProps, CustomizableLayout } from '@concrete-form/core'

type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
export type ItemLabelLayoutProps = CoreItemLabelLayoutProps & Omit<ReactLabelProps, 'for'>

const ItemLabel: React.FC<ItemLabelLayoutProps> = (props) => {
  const {
    control,
    label,
    labelPosition = 'right',
    ...containerProps
  } = props
  const classNames = [
    'concreteform-item-label',
    `concreteform-${labelPosition}`,
    containerProps?.className,
  ].filter(c => !!c).join(' ')

  return (
    <CustomizableLayout type="itemLabel" props={props}>
      <label data-testid="item-label" {...containerProps} className={classNames}>
        <div>{ control }</div>
        <div>{ label }</div>
      </label>
    </CustomizableLayout>
  )
}

export default ItemLabel
