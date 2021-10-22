import React, { MouseEventHandler } from 'react'

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  backgroundColor,
  children,
}) => (
  <button onClick={onClick} style={{ backgroundColor }}>
    { children }
  </button>
)

export default Button
