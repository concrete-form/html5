import { Story } from '@storybook/react'
import { formContext, FormContextArgs, argTypes } from '../storybook/formContext'
import { SliderProps } from '@concrete-form/core'
import Slider from './Slider'

export default {
  component: Slider,
  title: 'Controls/Slider',
  decorators: [formContext],
  argTypes,
}

const template: Story<FormContextArgs<SliderProps>> = ({ formContext, ...props }) => <Slider {...props} />

export const DefaultControl = template.bind({})

DefaultControl.args = {
  name: 'demo',
  fieldProps: { min: { value: 50, message: 'Minmum 50%' } },
  formContext: { defaultValues: { demo: 50 } },
}

export const WithLabel = template.bind({})

WithLabel.args = {
  name: 'demo',
  label: <>Label <span style={{ color: 'deeppink' }}>with styles</span></>,
  fieldProps: { min: { value: 50, message: 'Minmum 50%' } },
  formContext: { defaultValues: { demo: 50 } },
}
