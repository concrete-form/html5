import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Controls Group/Checkbox',
  decorators: [formContext],
  argTypes,
}

const defaultOptions = [
  'first',
  { label: 'with label', value: 'second' },
  { label: <span style={{ fontWeight: 'bold', color: 'deeppink' }}>with style</span>, value: 'third' },
  { label: 'disabled', value: 'fourth', props: { disabled: true } },
  'last',
]

const template: Story<FormContextArgs<CheckboxProps>> = ({ formContext, ...props }) => <Checkbox {...props} />

export const DefaultControl = template.bind({})

DefaultControl.args = {
  name: 'demo',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo: 'second' } },
  options: defaultOptions,
}
