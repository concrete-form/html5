import { SingleCheckboxProps, useCustomControlProps } from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'
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
    <ControlWithErrors name={name}>
      <ItemLabel
        name={name}
        control={<input {...props} />}
        label={label}
        labelPosition={labelPosition}
      />
    </ControlWithErrors>
  )
}

export default SingleCheckbox
