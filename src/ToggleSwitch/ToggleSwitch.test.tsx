import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToggleSwitch from './ToggleSwitch'

describe('ToggleSwitch', () => {
  it('render name prop', () => {
    render(<ToggleSwitch name="test" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'test')
  })

  it('doesn\'t render id prop', () => {
    render(<ToggleSwitch name="test" />)
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('id')
  })

  it('render input as required', () => {
    render(<ToggleSwitch name="test" required />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('aria-required', 'true')
  })

  it('render other props to the input', () => {
    render(<ToggleSwitch name="test" data-test="foo" />)
    expect(screen.getByRole('checkbox').dataset.test).toBe('foo')
  })

  it('render label', () => {
    render(<ToggleSwitch name="test" label="test-label" />)
    expect(screen.getByRole('checkbox', { name: 'test-label' })).toBeInTheDocument()
    expect(screen.getByText('test-label')).toBeInTheDocument()
  })

  it('render component label', () => {
    render(<ToggleSwitch name="test" label={<div data-testid="foo">test-label</div>} />)
    expect(screen.getByRole('checkbox', { name: 'test-label' })).toBeInTheDocument()
    expect(screen.getByText('test-label')).toBeInTheDocument()
    expect(screen.getByTestId('foo')).toBeInTheDocument()
  })

  it('render label right by default', () => {
    render(<ToggleSwitch name="test" label="test-label" />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-right')
  })

  it('render label in the required position', () => {
    render(<ToggleSwitch name="test" label="test-label" labelPosition="bottom" />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-bottom')
  })

  it('is unchecked by default', () => {
    render(<ToggleSwitch name="test" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('render initial value', () => {
    render(<ToggleSwitch name="test" />, { formValues: { test: true } })
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('consider invalid value as "true"', () => {
    render(<ToggleSwitch name="test" />, { formValues: { test: 'im invalid' } })
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('render new value when changed', async () => {
    render(<ToggleSwitch name="test" />)
    const input = screen.getByRole('checkbox')
    await userEvent.click(input)
    await waitFor(() => {
      expect(input).toBeChecked()
    })
    await userEvent.click(input)
    await waitFor(() => {
      expect(input).not.toBeChecked()
    })
  })

  it('call onChange callback', async () => {
    const callback = jest.fn()
    render(<ToggleSwitch name="test" onChange={callback} />)
    await userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  it('call onBlur callback', async () => {
    const callback = jest.fn()
    render(<ToggleSwitch name="test" onBlur={callback} />)
    await userEvent.click(screen.getByRole('checkbox'))
    await userEvent.click(document.body)
    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  it('save data on the form', async () => {
    const onSubmit = jest.fn()
    render(<><ToggleSwitch name="test" /><button type="submit">submit</button></>, { onSubmit })
    await userEvent.click(screen.getByRole('checkbox'))
    await userEvent.click(screen.getByRole('button', { name: 'submit' }))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ test: true }, expect.anything())
    })
  })

  it('handle validation error', async () => {
    render(<ToggleSwitch name="test" fieldProps={{ required: 'testing errors' }} />, { formValues: { test: true } })
    const input = screen.getByRole('checkbox')
    expect(input).toBeValid()
    await userEvent.click(input)
    await userEvent.click(document.body)
    await waitFor(() => {
      expect(input).toBeInvalid()
    })
    expect(screen.getByText('testing errors')).toBeInTheDocument()
  })

  it('forward props to html elements', () => {
    render(<ToggleSwitch
      name="test"
      containerProps={{ 'data-testid': 'test-container', className: 'foo' } as any}
      toggleSwitchContainerProps={{ 'data-testid': 'test-ts-container', className: 'bar' } as any}
      toggleSwitchSliderProps={{ 'data-testid': 'test-ts-slider', className: 'baz' } as any}
    />)
    expect(screen.getByTestId('test-container')).toHaveClass('concreteform-item-label')
    expect(screen.getByTestId('test-container')).toHaveClass('foo')

    expect(screen.getByTestId('test-ts-container')).toHaveClass('concreteform-toggle-switch')
    expect(screen.getByTestId('test-ts-container')).toHaveClass('bar')

    expect(screen.getByTestId('test-ts-slider')).toHaveClass('concreteform-toggle-switch-slider')
    expect(screen.getByTestId('test-ts-slider')).toHaveClass('baz')
  })
})
