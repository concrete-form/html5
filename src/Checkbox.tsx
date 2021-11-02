import { useMemo } from 'react'
import {
  CheckboxProps,
  useControlProps,
  parseCheckboxOptions,
} from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'
import ItemsGroup from './layout/ItemsGroup'
import ItemLabel from './layout/ItemLabel'

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  options,
  orientation,
  labelPosition,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps, true)
  const parsedOptions = useMemo(() => parseCheckboxOptions(options), [options])

  return (
    <ControlWithErrors name={name}>
      <ItemsGroup
        name={name}
        items={(
          <>
            { parsedOptions.map(({ label, value, props: checkboxProps }) => (
              <ItemLabel
                key={value}
                name={name}
                control={<input value={value} {...props} {...checkboxProps} type="checkbox" />}
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

export default Checkbox
