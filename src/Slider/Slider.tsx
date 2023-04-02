import {
  SliderProps as CoreSliderProps,
  useControlProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export type SliderProps = CoreSliderProps & ReactInputProps & {
  containerProps?: Omit<ReactLabelProps, 'for'>
}

const Slider: React.FC<SliderProps> = ({
  name,
  label,
  labelPosition = 'top',
  containerProps,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)

  return (
    <ControlWithErrors name={name}>
      <ItemLabel
        name={name}
        control={<input {...props} type="range" />}
        label={label}
        labelPosition={labelPosition}
        {...containerProps}
      />
    </ControlWithErrors>
  )
}

export default Slider
