import { ToggleSwitchProps, useCustomControlProps } from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'
import ItemLabel from './layout/ItemLabel'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
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
        control={(
          <label className="concreteform-toggle-switch">
            <input {...props} />
            <div className="concreteform-toggle-switch-slider" />
          </label>
        )}
        label={label}
        labelPosition={labelPosition}
      />
    </ControlWithErrors>
  )
}

export default ToggleSwitch
