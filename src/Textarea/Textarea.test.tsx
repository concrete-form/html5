import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Textarea from './Textarea'

describe('Textarea', () => {
  it('render name prop', () => {
    render(<Textarea name="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'test')
  })

  it('render id prop', () => {
    render(<Textarea name="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('id')
  })

  it('render textarea as required', () => {
    render(<Textarea name="test" required />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeRequired()
    expect(textarea).toHaveAttribute('aria-required', 'true')
  })

  it('render other props to the textarea', () => {
    render(<Textarea name="test" data-test="foo" />)
    expect(screen.getByRole('textbox').dataset.test).toBe('foo')
  })

  it('render initial value', () => {
    render(<Textarea name="test" />, { formValues: { test: 'foo\nbar' } })
    expect(screen.getByRole('textbox')).toHaveDisplayValue('foo\nbar')
  })

  it('render new value when changed', () => {
    render(<Textarea name="test" />)
    const textarea = screen.getByRole('textbox')
    userEvent.type(textarea, 'bar\nbaz')
    expect(textarea).toHaveDisplayValue('bar\nbaz')
  })

  it('call onChange callback', () => {
    const callback = jest.fn()
    render(<Textarea name="test" onChange={callback} />)
    userEvent.type(screen.getByRole('textbox'), 'b{enter}a{enter}r')
    expect(callback).toHaveBeenCalledTimes(5)
  })

  it('call onBlur callback', () => {
    const callback = jest.fn()
    render(<Textarea name="test" onBlur={callback} />)
    userEvent.click(screen.getByRole('textbox'))
    userEvent.click(document.body)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('save data on the form', async () => {
    const onSubmit = jest.fn()
    render(<><Textarea name="test" /><button type="submit">submit</button></>, { onSubmit })
    userEvent.type(screen.getByRole('textbox'), 'b{enter}a{enter}z')
    userEvent.click(screen.getByRole('button', { name: 'submit' }))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ test: 'b\na\nz' }, expect.anything())
    })
  })

  it('handle validation error', async () => {
    render(<Textarea name="test" fieldProps={{ required: 'testing errors' }} />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeValid()
    userEvent.click(textarea)
    userEvent.click(document.body)
    await waitFor(() => {
      expect(textarea).toBeInvalid()
    })
    expect(screen.getByText('testing errors')).toBeInTheDocument()
  })
})
