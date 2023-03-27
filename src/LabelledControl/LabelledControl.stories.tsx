import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import { LabelledControlProps } from '@concrete-form/core'
import LabelledControl from './LabelledControl'
import Input from '../Input'
import CheckboxGroup from '../CheckboxGroup'

export default {
  component: LabelledControl,
  title: 'Layout/LabelledControl',
  decorators: [formContext],
  argTypes,
}

const templateWithSingleControl: Story<FormContextArgs<LabelledControlProps>> = ({ formContext, ...props }) => (
  <LabelledControl {...props}>
    <Input name="demo" />
  </LabelledControl>
)

const templateWithControlGroup: Story<FormContextArgs<LabelledControlProps>> = ({ formContext, ...props }) => (
  <LabelledControl {...props}>
    <CheckboxGroup name="demo" options={['foo', 'bar', 'baz']} />
  </LabelledControl>
)

export const WithSingleControl = templateWithSingleControl.bind({})

WithSingleControl.args = {
  label: <>Label <span style={{ color: 'deeppink' }}>with styles</span>. (label LINKED to the input)</>,
}

export const WithControlGroup = templateWithControlGroup.bind({})

WithControlGroup.args = {
  label: <>Label <span style={{ color: 'deeppink' }}>with styles</span>. (label NOT linked)</>,
}
