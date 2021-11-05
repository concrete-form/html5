import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('Input', () => {
  it('render name prop', () => {
    render(<Input name="test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('name', 'test')
  })

  it('render id prop', () => {
    render(<Input name="test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id')
  })

  it('render input as required', () => {
    render(<Input name="test" required />)
    const input = screen.getByRole('textbox')
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('aria-required', 'true')
  })

  it('render other props to the input', () => {
    render(<Input name="test" data-test="foo" />)
    const input = screen.getByRole('textbox')
    expect(input.dataset.test).toBe('foo')
  })

  it('render initial value', () => {
    render(<Input name="test" />, { formValues: { test: 'foo' } })
    const input = screen.getByRole('textbox')
    expect(input).toHaveDisplayValue('foo')
  })

  it('render new value when changed', () => {
    render(<Input name="test" />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'bar')
    expect(input).toHaveDisplayValue('bar')
  })

  it('call onChange callback', () => {
    const callback = jest.fn()
    render(<Input name="test" onChange={callback} />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'foo')
    expect(callback).toHaveBeenCalledTimes(3)
  })

  it('call onBlur callback', () => {
    const callback = jest.fn()
    render(<Input name="test" onBlur={callback} />)
    const input = screen.getByRole('textbox')
    userEvent.click(input)
    userEvent.click(document.body)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('save data on the form', async () => {
    const onSubmit = jest.fn()
    render(<><Input name="test" /><button type="submit">submit</button></>, { onSubmit })
    const input = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button', { name: 'submit' })
    userEvent.type(input, 'baz')
    userEvent.click(submitButton)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ test: 'baz' }, expect.anything())
    })
  })

  it('handle validation error', async () => {
    render(<Input name="test" fieldProps={{ required: 'testing errors' }} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeValid()
    userEvent.click(input)
    userEvent.click(document.body)
    await waitFor(() => {
      expect(input).toBeInvalid()
    })
    expect(screen.getByText('testing errors')).toBeInTheDocument()
  })
})
