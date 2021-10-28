import React from 'react'
import { Orientation } from '@concrete-form/core'

type OptionsGroupProps = {
  orientation?: Orientation
}

const OptionsGroup: React.FC<OptionsGroupProps> = ({
  orientation = 'vertical',
  children,
}) => {
  // todo : use custom component is set
  const classNames = [
    'concreteform-options-group',
    `concreteform-options-group-${orientation}`,
  ]
  return (
    <div className={classNames.join(' ')}>{ children }</div>
  )
}

export default OptionsGroup
