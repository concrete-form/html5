import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('Input', () => {
  it('handle input value', () => {
    render(<Input value="foo" onChange={jest.fn()} />)
    expect(screen.getByDisplayValue('foo')).toBeInTheDocument()
  })

  it('calls onChange', () => {
    const onChange = jest.fn()
    render(<Input onChange={onChange} />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'foo')

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(screen.getByDisplayValue('foo')).toBeInTheDocument()
  })
})
