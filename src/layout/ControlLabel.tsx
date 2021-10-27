import React from 'react'

type ControlLabelProps = {
  label?: React.ReactNode
}

const ControlLabel: React.FC<ControlLabelProps> = ({
  label,
  children,
}) => {
  // todo : use custom component is set
  return (
    <div><label>{ children } { label }</label></div>
  )
}

export default ControlLabel
