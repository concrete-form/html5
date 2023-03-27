import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import RadioGroup, { RadioGroupProps } from './RadioGroup'

export default {
  component: RadioGroup,
  title: 'Controls Group/Radio',
  decorators: [formContext],
  argTypes,
}

const defaultOptions = [
  { label: <em>None</em>, value: '' },
  'first',
  { label: 'with label', value: 'second' },
  { label: <span style={{ fontWeight: 'bold', color: 'deeppink' }}>with style</span>, value: 'third' },
  { label: 'disabled', value: 'fourth', props: { disabled: true } },
  'last',
]

const validateNotEmpty = (value: string) => value === '' ? 'This field is required' : true

const template: Story<FormContextArgs<RadioGroupProps>> = ({ formContext, ...props }) => <RadioGroup {...props} />

export const DefaultControl = template.bind({})

DefaultControl.args = {
  name: 'demo',
  fieldProps: { validate: validateNotEmpty },
  formContext: { defaultValues: { demo: 'second' } },
  options: defaultOptions,
}
