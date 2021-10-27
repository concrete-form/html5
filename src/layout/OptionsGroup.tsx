import React from 'react'

type OptionsGroupProps = {
  orientation?: 'horizontal' | 'vertical'
}

const OptionsGroup: React.FC<OptionsGroupProps> = ({
  orientation = 'vertical',
  children,
}) => {
  // todo : use custom component is set
  const flexDirection = orientation === 'horizontal' ? 'row' : 'column'
  return (
    <div style={{ display: 'flex', flexDirection }}>{ children }</div>
  )
}

export default OptionsGroup
