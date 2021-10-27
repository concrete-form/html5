import React, { useMemo } from 'react'
import {
  SelectProps,
  useControlProps,
  parseSelectOptions,
  ChoiceType,
  FormattedOptions,
  FormattedOption,
  FormattedGroup,
} from '@concrete-form/core'

import Control from './layout/Control'

const Select: React.FC<SelectProps> = ({
  name,
  children,
  options,
  allowEmpty = false,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseSelectOptions(options, children), [options, children])

  const renderOptions = (options: FormattedOptions<HTMLOptionElement, HTMLOptGroupElement>) => {
    return options.map(item => {
      switch (item.type) {
        case ChoiceType.Group:
          return renderGroup(item)
        case ChoiceType.Option:
          return renderOption(item)
        default:
          return null
      }
    })
  }

  const renderGroup = ({ label, options, props }: FormattedGroup<HTMLOptionElement, HTMLOptGroupElement>) => (
    <optgroup key={`label:${label}`} label={label} {...props}>{ renderOptions(options) }</optgroup>
  )

  const renderOption = ({ label, value, props }: FormattedOption<HTMLOptionElement>) => (
    <option key={value} value={value} {...props}>{ label }</option>
  )

  return (
    <Control name={name}>
      <select
        {...props}
        onBlur={() => {}}
      >
        { allowEmpty && !inputProps.multiple && <option value="" /> }
        { renderOptions(parsedOptions) }
        { children }
      </select>
    </Control>
  )
}

export default Select
