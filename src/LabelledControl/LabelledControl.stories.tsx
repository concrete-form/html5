import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import { LabelledcontrolProps } from '@concrete-form/core'
import LabelledControl from './LabelledControl'
import Input from '../Input'
import Checkbox from '../Checkbox'

export default {
  component: LabelledControl,
  title: 'Layout/LabelledControl',
  decorators: [formContext],
  argTypes,
}

const templateWithSingleControl: Story<FormContextArgs<LabelledcontrolProps>> = ({ formContext, ...props }) => (
  <LabelledControl {...props}>
    <Input name="demo" />
  </LabelledControl>
)

const templateWithControlGroup: Story<FormContextArgs<LabelledcontrolProps>> = ({ formContext, ...props }) => (
  <LabelledControl {...props}>
    <Checkbox name="demo" options={['foo', 'bar', 'baz']} />
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
