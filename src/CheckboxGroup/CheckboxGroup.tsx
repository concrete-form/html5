import { useMemo } from 'react'
import {
  CheckboxGroupProps as CoreCheckboxGroupProps,
  useControlProps,
  parseCheckboxOptions,
  getCheckboxProps,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'
import ItemsGroup from '../layout/ItemsGroup'
import ItemLabel from '../layout/ItemLabel'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactLabelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
type ReactDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type CheckboxGroupProps = CoreCheckboxGroupProps<ReactInputProps, React.ReactNode> & ReactInputProps & {
  itemContainerProps?: Omit<ReactLabelProps, 'for'>
  itemLabelContainerProps?: ReactDivProps
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  orientation,
  labelPosition,
  itemContainerProps,
  itemLabelContainerProps,
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
                control={<input {...getCheckboxProps(value, { ...props, ...checkboxProps })} />}
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

export default CheckboxGroup
