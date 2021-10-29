import React from 'react'
import { Orientation, useConcreteFormConfig } from '@concrete-form/core'

type ItemsGroupProps = {
  orientation?: Orientation
}

const ItemsGroup: React.FC<ItemsGroupProps> = ({
  orientation = 'vertical',
  children,
}) => {
  const { layout: { itemsGroup: CustomItemsGroup } = {} } = useConcreteFormConfig()

  if (CustomItemsGroup) {
    return <CustomItemsGroup orientation={orientation}>{ children }</CustomItemsGroup>
  }

  const classNames = [
    'concreteform-items-group',
    `concreteform-items-group-${orientation}`,
  ]
  return (
    <div className={classNames.join(' ')}>{ children }</div>
  )
}

export default ItemsGroup
