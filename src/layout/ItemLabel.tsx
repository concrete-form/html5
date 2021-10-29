import React from 'react'
import { Position, useConcreteFormConfig } from '@concrete-form/core'

type ItemLabelProps = {
  label?: React.ReactNode
  labelPosition?: Position
}

const ItemLabel: React.FC<ItemLabelProps> = ({
  label,
  labelPosition = 'right',
  children,
}) => {
  const { layout: { itemLabel: CustomItemLabel } = {} } = useConcreteFormConfig()

  if (CustomItemLabel) {
    return <CustomItemLabel label={label} labelPosition={labelPosition}>{ children }</CustomItemLabel>
  }

  const classNames = [
    'concreteform-item-label',
    `concreteform-${labelPosition}`,
  ]

  return (
    <label className={classNames.join(' ')}>
      <div>{ children }</div>
      <div>{ label }</div>
    </label>
  )
}

export default ItemLabel
