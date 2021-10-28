import React from 'react'
import { Position } from '@concrete-form/core'

type ControlLabelProps = {
  label?: React.ReactNode
  labelPosition?: Position
}

const Wrapper: React.FC = ({ children }) => <div className="concreteform-control-label">{ children }</div>

const ControlLabel: React.FC<ControlLabelProps> = ({
  label,
  labelPosition = 'right',
  children,
}) => {
  // todo : use custom component is set
  switch (labelPosition) {
    case 'top':
      return (
        <Wrapper><label><div>{ label }</div><div>{ children }</div></label></Wrapper>
      )
    case 'bottom':
      return (
        <Wrapper><label><div>{ children }</div><div>{ label }</div></label></Wrapper>
      )
    case 'left':
      return (
        <Wrapper><label>{ label } { children }</label></Wrapper>
      )
    case 'right':
    default:
      return (
        <Wrapper><label>{ children } { label }</label></Wrapper>
      )
  }
}

export default ControlLabel
