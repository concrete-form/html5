import { useMemo } from 'react'
import {
  RadioGroupProps as CoreRadioGroupProps,
  useControlProps,
  parseRadioOptions,
  getRadioProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemsGroup from '../layout/ItemsGroup'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
type ReactDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type RadioGroupProps = CoreRadioGroupProps<ReactInputProps, React.ReactNode> & ReactInputProps & {
  itemContainerProps?: Omit<ReactLabelProps, 'for'>
  itemLabelContainerProps?: ReactDivProps
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  orientation,
  labelPosition,
  itemContainerProps,
  itemLabelContainerProps,
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
                label={itemLabelContainerProps ? <div {...itemLabelContainerProps}>{ label }</div> : label}
                labelPosition={labelPosition}
                {...itemContainerProps}
              />
            )) }
          </>
        )}
        orientation={orientation}
      />
    </ControlWithErrors>
  )
}

export default RadioGroup
