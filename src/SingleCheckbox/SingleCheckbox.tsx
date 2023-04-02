import {
  SingleCheckboxProps as CoreSingleCheckboxProps,
  useCustomControlProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export type SingleCheckboxProps = CoreSingleCheckboxProps & ReactInputProps & {
  containerProps?: Omit<ReactLabelProps, 'for'>
}

const SingleCheckbox: React.FC<SingleCheckboxProps> = ({
  name,
  label,
  labelPosition,
  containerProps,
  ...inputProps
}) => {
  const { id, ...props } = useCustomControlProps(name, {
    incomingDataFormatter: (value?: boolean) => !!value,
    outgoingDataFormatter: (value: string) => !!value,
  }, {
    ...inputProps,
    type: 'checkbox',
  }) as any

  return (
    <ControlWithErrors name={name}>
      <ItemLabel
        name={name}
        control={<input {...props} />}
        label={label}
        labelPosition={labelPosition}
        {...containerProps}
      />
    </ControlWithErrors>
  )
}

export default SingleCheckbox
