import {
  ToggleSwitchProps as CoreToggleSwitchProps,
  useCustomControlProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
type ReactDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type ToggleSwitchProps = CoreToggleSwitchProps & ReactInputProps & {
  containerProps?: Omit<ReactLabelProps, 'for'>
  toggleSwitchContainerProps?: Omit<ReactLabelProps, 'for'>
  toggleSwitchSliderProps?: ReactDivProps
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  name,
  applyInitialValue = false,
  label,
  labelPosition,
  containerProps,
  toggleSwitchContainerProps,
  toggleSwitchSliderProps,
  ...inputProps
}) => {
  const { id, ...props } = useCustomControlProps(name, {
    incomingDataFormatter: (value?: boolean) => !!value,
    outgoingDataFormatter: (value: string) => !!value,
    formatInitialValue: applyInitialValue,
  }, {
    ...inputProps,
    type: 'checkbox',
  }) as any

  return (
    <ControlWithErrors name={name}>
      <ItemLabel
        name={name}
        control={(
          <label {...toggleSwitchContainerProps} className={`concreteform-toggle-switch ${toggleSwitchContainerProps?.className ?? ''}`}>
            <input {...props} />
            <div {...toggleSwitchSliderProps} className={`concreteform-toggle-switch-slider ${toggleSwitchSliderProps?.className ?? ''}`} />
          </label>
        )}
        label={label}
        labelPosition={labelPosition}
        {...containerProps}
      />
    </ControlWithErrors>
  )
}

export default ToggleSwitch
