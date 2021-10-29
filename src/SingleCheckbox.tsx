import React from 'react'
import { SingleCheckboxProps, useCustomControlProps } from '@concrete-form/core'

import Control from './layout/Control'
import ItemLabel from './layout/ItemLabel'

const SingleCheckbox: React.FC<SingleCheckboxProps> = ({
  name,
  applyInitialValue = false,
  label,
  labelPosition,
  ...inputProps
}) => {
  const props = useCustomControlProps(name, {
    incomingDataFormatter: (value?: boolean) => !!value,
    outgoingDataFormatter: (value: string) => !!value,
    formatInitialValue: applyInitialValue,
  }, {
    ...inputProps,
    type: 'checkbox',
  })

  return (
    <Control name={name}>
      <ItemLabel label={label} labelPosition={labelPosition}>
        <input {...props} />
      </ItemLabel>
    </Control>
  )
}

export default SingleCheckbox
