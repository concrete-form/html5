import React from 'react'
import { Position, useConcreteFormConfig } from '@concrete-form/core'

import Label from './Label'

type LabelledControlProps = {
  label?: React.ReactNode
  labelPosition?: Position
}

const LabelledControl: React.FC<LabelledControlProps> = ({
  label,
  labelPosition = 'left',
  children,
}) => {
  const { layout: { labelledControl: CustomLabelledControl } = {} } = useConcreteFormConfig()

  if (CustomLabelledControl) {
    return (
      <CustomLabelledControl label={<Label>{ label }</Label>} labelPosition={labelPosition}>
        { children }
      </CustomLabelledControl>
    )
  }

  const classNames = [
    'concreteform-labelled-control',
    `concreteform-${labelPosition}`,
  ]

  return (
    <label className={classNames.join(' ')}>
      { children }
      <Label>{ label }</Label>
    </label>
  )
}

export default LabelledControl
