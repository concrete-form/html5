import { useMemo } from 'react'
import {
  SelectProps as CoreSelectProps,
  useControlProps,
  parseSelectOptions,
} from '@concrete-form/core'

import ControlWithErrors from '../util/ControlWithErrors'

type ReactSelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type ReactOptionsProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
type ReactOptGroupProps = React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
export type SelectProps = CoreSelectProps<ReactOptGroupProps, ReactOptionsProps, string | undefined> & ReactSelectProps

/* istanbul ignore next ; trick to use ReturnType with a generic function */
const o = () => parseSelectOptions<ReactOptGroupProps, ReactOptionsProps, string | undefined>()
type Options = ReturnType<typeof o>

const Select: React.FC<SelectProps> = ({
  name,
  children,
  options,
  allowEmpty = false,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseSelectOptions(options, children), [options, children])

  const renderOptions = (options: Options) => {
    return options.map(item => {
      switch (item.type) {
        case 'group': {
          const { label, options, props } = item
          return <optgroup key={`label:${label ?? ''}`} label={label} {...props}>{ renderOptions(options) }</optgroup>
        }
        case 'option': {
          const { label, value, props } = item
          return <option key={value} value={value} {...props}>{ label }</option>
        }
        /* istanbul ignore next ; edge case if core version doesn't match this repo version */
        default:
          console.warn('Received unknown option type in select')
          return null
      }
    })
  }

  return (
    <ControlWithErrors name={name}>
      <select
        {...props}
      >
        { allowEmpty && !inputProps.multiple && <option /> }
        { renderOptions(parsedOptions) }
        { children }
      </select>
    </ControlWithErrors>
  )
}

export default Select
