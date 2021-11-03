import { SliderProps, useControlProps } from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemLabel from '../layout/ItemLabel'

const Slider: React.FC<SliderProps> = ({
  name,
  label,
  labelPosition = 'top',
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
      />
    </ControlWithErrors>
  )
}

export default Slider
