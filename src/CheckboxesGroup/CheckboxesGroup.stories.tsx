import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import CheckboxesGroup, { CheckboxesGroupProps } from './CheckboxesGroup'

export default {
  component: CheckboxesGroup,
  title: 'Controls Group/Checkboxes',
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

const template: Story<FormContextArgs<CheckboxesGroupProps>> = ({ formContext, ...props }) => <CheckboxesGroup {...props} />

export const DefaultControl = template.bind({})

DefaultControl.args = {
  name: 'demo',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo: 'second' } },
  options: defaultOptions,
}
