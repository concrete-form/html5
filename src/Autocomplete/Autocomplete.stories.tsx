import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import Autocomplete, { AutocompleteProps } from './Autocomplete'

export default {
  component: Autocomplete,
  title: 'Controls/Autocomplete',
  decorators: [formContext],
  argTypes,
}

const template: Story<FormContextArgs<AutocompleteProps>> = ({ formContext, ...props }) => <Autocomplete {...props} />

export const DefaultControl = template.bind({})

DefaultControl.args = {
  name: 'demo',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo: 'Default value' } },
}
