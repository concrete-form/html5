import React from 'react'
import { Story } from '@storybook/react'
import Input, { InputProps } from './Input'

export default {
  component: Input,
  title: 'components/Input',
}

const template: Story<InputProps> = props => <Input {...props} />

export const Empty = template.bind({})

export const WithContent = template.bind({})

WithContent.args = {
  value: 'Hello world',
}
