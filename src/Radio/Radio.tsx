import { useMemo } from 'react'
import {
  RadioProps,
  useControlProps,
  parseRadioOptions,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemsGroup from '../layout/ItemsGroup'
import ItemLabel from '../layout/ItemLabel'

const Radio: React.FC<RadioProps> = ({
  name,
  options,
  orientation,
  labelPosition,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps, true)
  const parsedOptions = useMemo(() => parseRadioOptions(options), [options])

  return (
    <ControlWithErrors name={name}>
      <ItemsGroup
        name={name}
        items={(
          <>
            { parsedOptions.map(({ label, value, props: radioProps }) => (
              <ItemLabel
                key={value}
                name={name}
                control={<input value={value} {...props} {...radioProps} type="radio" />}
                label={label}
                labelPosition={labelPosition}
              />
            )) }
          </>
        )}
        orientation={orientation}
      />
    </ControlWithErrors>
  )
}

export default Radio
