import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import { DateTimeProps } from '@concrete-form/core'
import DateTimeInput from './DateTime'

export default {
  component: DateTimeInput,
  title: 'Controls/DateTime',
  decorators: [formContext],
  argTypes,
}

const template: Story<FormContextArgs<DateTimeProps>> = ({ formContext, ...props }) => <DateTimeInput {...props} />

export const TypeDate = template.bind({})

TypeDate.storyName = 'Type "date" (default)'
TypeDate.args = {
  name: 'demo1',
  type: 'date',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo1: '2021-01-01' } },
}

export const TypeTime = template.bind({})

TypeTime.storyName = 'Type "time"'
TypeTime.args = {
  name: 'demo2',
  type: 'time',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo2: '14:59' } },
}

export const TypeDateTime = template.bind({})

TypeDateTime.storyName = 'Type "datetime"'
TypeDateTime.args = {
  name: 'demo3',
  type: 'datetime',
  fieldProps: { required: 'This field is required' },
  formContext: { defaultValues: { demo3: '2021-01-01T14:59' } },
}
