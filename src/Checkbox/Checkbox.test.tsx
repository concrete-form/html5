import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('render options', () => {
    render(<Checkbox name="test" options={['foo', 'bar']} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'bar' })).toBeInTheDocument()
  })

  it('doesn\'t crash without options', () => {
    render(<Checkbox name="test" />)
  })

  it('render same label/value for string option', () => {
    render(<Checkbox name="test" options={['foo']} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toHaveProperty('value', 'foo')
  })

  it('render labelled option', () => {
    render(<Checkbox name="test" options={[{ label: 'foo', value: 'bar' }]} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toHaveProperty('value', 'bar')
  })

  it('render component label', () => {
    render(<Checkbox name="test" options={[{ label: <div data-testid="component-label">label</div>, value: 'bar' }]} />)
    expect(screen.getByTestId('component-label')).toBeInTheDocument()
  })

  it('render option props', () => {
    render(<Checkbox name="test" options={[{ label: 'foo', value: 'foo', props: { disabled: true } }]} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toBeDisabled()
  })

  it('render name prop on all options', () => {
    render(<Checkbox name="test" options={['foo', 'bar']} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toHaveProperty('name', 'test')
    expect(screen.getByRole('checkbox', { name: 'bar' })).toHaveProperty('name', 'test')
  })

  it('render type checkbox prop', () => {
    render(<Checkbox name="test" options={['foo']} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toHaveProperty('type', 'checkbox')
  })

  it('doesn\'t render id prop', () => {
    render(<Checkbox name="test" options={['foo']} />)
    expect(screen.getByRole('checkbox', { name: 'foo' })).toHaveProperty('id', '')
  })

  it('render inputs as required', () => {
    render(<Checkbox name="test" options={['foo', 'bar']} required />)
    const fooOption = screen.getByRole('checkbox', { name: 'foo' })
    const barOption = screen.getByRole('checkbox', { name: 'bar' })
    expect(fooOption).toBeRequired()
    expect(fooOption).toHaveAttribute('aria-required', 'true')
    expect(barOption).toBeRequired()
    expect(barOption).toHaveAttribute('aria-required', 'true')
  })

  it('render other props to all the inputs', () => {
    render(<Checkbox name="test" options={['foo', 'bar']} data-testid="foo" />)
    expect(screen.getAllByTestId('foo')).toHaveLength(2)
  })

  it('render vertically by default', () => {
    render(<Checkbox name="test" options={['foo']} />)
    expect(screen.getByTestId('group')).toHaveClass('concreteform-items-group-vertical')
  })

  it('render in the required orientation', () => {
    render(<Checkbox name="test" options={['foo']} orientation="horizontal" />)
    expect(screen.getByTestId('group')).toHaveClass('concreteform-items-group-horizontal')
  })

  it('render label right by default', () => {
    render(<Checkbox name="test" options={['foo']} />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-right')
  })

  it('render label in the required position', () => {
    render(<Checkbox name="test" options={['foo']} labelPosition="bottom" />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-bottom')
  })

  it('render initial value', () => {
    render(<Checkbox name="test" options={['foo', 'bar', 'baz']} />, { formValues: { test: ['foo', 'baz'] } })
    expect(screen.getByRole('checkbox', { name: 'foo' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'bar' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'baz' })).toBeChecked()
  })

  it('render new value when changed', () => {
    render(<Checkbox name="test" options={['foo', 'bar']} />, { formValues: { test: ['bar'] } })
    const fooOption = screen.getByRole('checkbox', { name: 'foo' })
    const barOption = screen.getByRole('checkbox', { name: 'bar' })
    userEvent.click(fooOption)
    userEvent.click(barOption)
    expect(fooOption).toBeChecked()
    expect(barOption).not.toBeChecked()
  })

  it('call onChange callback', async () => {
    const callback = jest.fn()
    render(<Checkbox name="test" options={['foo']} onChange={callback} />)
    userEvent.click(screen.getByRole('checkbox', { name: 'foo' }))

    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
  })

  it('call onBlur callback', async () => {
    const callback = jest.fn()
    render(<Checkbox name="test" options={['foo']} onBlur={callback} />)
    userEvent.click(screen.getByRole('checkbox', { name: 'foo' }))
    userEvent.click(document.body)

    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
  })

  it('save data on the form', async () => {
    const onSubmit = jest.fn()
    render(<><Checkbox name="test" options={['foo', 'bar', 'baz']} /><button type="submit">submit</button></>, { onSubmit })
    userEvent.click(screen.getByRole('checkbox', { name: 'bar' }))
    userEvent.click(screen.getByRole('checkbox', { name: 'baz' }))
    userEvent.click(screen.getByRole('button', { name: 'submit' }))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ test: ['bar', 'baz'] }, expect.anything())
    })
  })

  it('handle validation error', async () => {
    const validateCheckbox = (values: any[]) => values?.length > 0 ? true : 'testing errors'
    render(<Checkbox name="test" options={['foo']} fieldProps={{ validate: { required: validateCheckbox } }} />)
    const fooOption = screen.getByRole('checkbox', { name: 'foo' })
    userEvent.click(fooOption)
    userEvent.click(fooOption)
    userEvent.click(document.body)
    await waitFor(() => {
      expect(fooOption).toBeInvalid()
    })
    expect(screen.getByText('testing errors')).toBeInTheDocument()
  })
})
