import React from 'react'
import { Position, useConcreteFormConfig } from '@concrete-form/core'

type ItemLabelProps = {
  label?: React.ReactNode
  labelPosition?: Position
}

const Wrapper: React.FC = ({ children }) => <div className="concreteform-item-label"><label>{ children }</label></div>

const ItemLabel: React.FC<ItemLabelProps> = ({
  label,
  labelPosition = 'right',
  children,
}) => {
  const { layout: { itemLabel: CustomItemLabel } = {} } = useConcreteFormConfig()

  if (CustomItemLabel) {
    return <CustomItemLabel label={label} labelPosition={labelPosition}>{ children }</CustomItemLabel>
  }

  switch (labelPosition) {
    case 'top':
      return (
        <Wrapper><div>{ label }</div><div>{ children }</div></Wrapper>
      )
    case 'bottom':
      return (
        <Wrapper><div>{ children }</div><div>{ label }</div></Wrapper>
      )
    case 'left':
      return (
        <Wrapper>{ label } { children }</Wrapper>
      )
    case 'right':
    default:
      return (
        <Wrapper>{ children } { label }</Wrapper>
      )
  }
}

export default ItemLabel
