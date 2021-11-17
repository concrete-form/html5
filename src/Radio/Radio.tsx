import { useMemo } from 'react'
import {
  RadioProps as CoreRadioProps,
  useControlProps,
  parseRadioOptions,
  getRadioProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemsGroup from '../layout/ItemsGroup'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type RadioProps = CoreRadioProps<ReactInputProps, React.ReactNode> & ReactInputProps

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
                control={<input {...getRadioProps(value, { ...props, ...radioProps })} />}
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
