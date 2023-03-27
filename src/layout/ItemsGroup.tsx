import { ItemsGroupLayoutProps, CustomizableLayout } from '@concrete-form/core'

export type { ItemsGroupLayoutProps } from '@concrete-form/core'

const ItemsGroup: React.FC<ItemsGroupLayoutProps> = (props) => {
  const {
    items,
    orientation = 'vertical',
  } = props

  const classNames = [
    'concreteform-items-group',
    `concreteform-items-group-${orientation}`,
  ]
  return (
    <CustomizableLayout type="itemsGroup" props={props}>
      <div data-testid="group" className={classNames.join(' ')}>
        { items }
      </div>
    </CustomizableLayout>
  )
}

export default ItemsGroup
