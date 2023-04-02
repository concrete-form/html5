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

type ItemProps<T> = T | ((props: any) => T)

export type RadioGroupProps = CoreRadioGroupProps<ReactInputProps, React.ReactNode> & ReactInputProps & {
  itemContainerProps?: ItemProps<Omit<ReactLabelProps, 'for'>>
  itemLabelContainerProps?: ItemProps<ReactDivProps>
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
            { parsedOptions.map(({ label, value, props: radioProps }) => {
              let containerProps
              if (itemContainerProps) {
                containerProps = typeof itemContainerProps === 'function' ? itemContainerProps(radioProps ?? {}) : itemContainerProps
              }

              let labelProps
              if (itemLabelContainerProps) {
                labelProps = typeof itemLabelContainerProps === 'function' ? itemLabelContainerProps(radioProps ?? {}) : itemLabelContainerProps
              }

              return (
                <ItemLabel
                  key={value}
                  name={name}
                  control={<input {...getRadioProps(value, { ...props, ...radioProps })} />}
                  label={labelProps ? <div {...labelProps}>{ label }</div> : label}
                  labelPosition={labelPosition}
                  {...containerProps}
                />
              )
            }) }
          </>
        )}
        orientation={orientation}
      />
    </ControlWithErrors>
  )
}

export default RadioGroup
