import React from 'react'
import { Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  component: Button,
  title: 'components/Button',
}

type ButtonPropsWithChildren = ButtonProps | { children: React.ReactNode }

const template: Story<ButtonPropsWithChildren> = props => <Button {...props} />

export const Default = template.bind({})

Default.args = {
  children: 'Button',
}

export const ColoredButton = template.bind({})

ColoredButton.args = {
  children: 'Button',
  backgroundColor: 'deeppink',
}
