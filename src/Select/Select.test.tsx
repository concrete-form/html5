import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from './Select'

describe('Select', () => {
  it('render name prop', () => {
    render(<Select name="test" />)
    expect(screen.getByRole('combobox')).toHaveAttribute('name', 'test')
  })

  it('render id prop', () => {
    render(<Select name="test" />)
    expect(screen.getByRole('combobox')).toHaveAttribute('id')
  })

  it('render select as required', () => {
    render(<Select name="test" required />)
    const select = screen.getByRole('combobox')
    expect(select).toBeRequired()
    expect(select).toHaveAttribute('aria-required', 'true')
  })

  it('render other props to the select', () => {
    render(<Select name="test" data-test="foo" />)
    expect(screen.getByRole('combobox').dataset.test).toBe('foo')
  })

  it('render options', () => {
    render(<Select name="test" options={['foo', { label: 'bar', value: 'bar' }, 'baz']} />)
    expect(screen.getByRole('option', { name: 'foo' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'bar' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'baz' })).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('doesn\'t crash without options', () => {
    render(<Select name="test" />)
  })

  it('render same label/value for string option', () => {
    render(<Select name="test" options={['foo']} />)
    expect(screen.getByRole('option', { name: 'foo' })).toHaveProperty('value', 'foo')
  })

  it('render labelled option', () => {
    render(<Select name="test" options={[{ label: 'foo', value: 'bar' }]} />)
    expect(screen.getByRole('option', { name: 'foo' })).toHaveProperty('value', 'bar')
  })

  it('render option props', () => {
    render(<Select name="test" options={[{ label: 'foo', value: 'foo', props: { disabled: true } }]} />)
    expect(screen.getByRole('option', { name: 'foo' })).toBeDisabled()
  })

  it('render options with group', () => {
    render(<Select
      name="test"
      options={[
        'foo',
        { group: 'group 1', options: ['a', { label: 'b', value: 'b' }, 'c'] },
        { group: 'group 2', options: ['d'] },
        'bar',
      ]}
    />)
    expect(screen.getByRole('group', { name: 'group 1' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'group 2' })).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(6)
  })

  it('render groups with no label', () => {
    render(<Select
      name="test"
      options={[
        { group: undefined, options: ['foo', 'bar'] },
        'foo',
      ]}
    />)
    expect(screen.getByRole('group')).toHaveProperty('label', '')
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('render groups props', () => {
    render(<Select
      name="test"
      options={[
        { group: 'group', options: ['foo', 'bar'], props: { disabled: true } },
        'foo',
      ]}
    />)
    expect(screen.getByRole('group')).toBeDisabled()
  })

  it('render children', () => {
    render(<Select name="test"><option value="foo">foo</option><option value="bar">bar</option></Select>)
    expect(screen.getByRole('option', { name: 'foo' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'bar' })).toBeInTheDocument()
  })

  it('call onChange callback', () => {
    const callback = jest.fn()
    render(<Select name="test" options={['foo']} onChange={callback} />)
    userEvent.selectOptions(screen.getByRole('combobox'), 'foo')
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('call onBlur callback', () => {
    const callback = jest.fn()
    render(<Select name="test" onBlur={callback} />)
    userEvent.click(screen.getByRole('combobox'))
    userEvent.click(document.body)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('handle validation error', async () => {
    render(<Select name="test" fieldProps={{ required: 'testing errors' }} />)
    const select = screen.getByRole('combobox')
    expect(select).toBeValid()
    userEvent.click(select)
    userEvent.click(document.body)
    await waitFor(() => {
      expect(select).toBeInvalid()
    })
    expect(screen.getByText('testing errors')).toBeInTheDocument()
  })

  it('save first item when not filled', async () => {
    const onSubmit = jest.fn()
    render(<><Select name="test" options={['foo', 'bar', 'baz']} /><button type="submit">submit</button></>, { onSubmit })
    userEvent.click(screen.getByRole('button', { name: 'submit' }))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ test: 'foo' }, expect.anything())
    })
  })

  describe('Select with single value', () => {
    it('render an empty option when "allowEmpty" is set to true', () => {
      render(<Select name="test" allowEmpty options={['foo']} />)
      expect(screen.getByRole('option', { name: '' })).toBeInTheDocument()
      expect(screen.getAllByRole('option')).toHaveLength(2)
    })

    it('render initial value', () => {
      render(<Select name="test" options={['foo', 'bar', 'baz']} />, { formValues: { test: 'bar' } })
      expect(screen.getByRole('combobox')).toHaveDisplayValue('bar')
    })

    it('render new value when changed', () => {
      render(<Select name="test" options={['foo', 'bar', 'baz']} />)
      const select = screen.getByRole('combobox')
      userEvent.selectOptions(select, 'bar')
      expect(select).toHaveDisplayValue('bar')
    })

    it('save data on the form', async () => {
      const onSubmit = jest.fn()
      render(<><Select name="test" options={['foo', 'bar', 'baz']} /><button type="submit">submit</button></>, { onSubmit })
      userEvent.selectOptions(screen.getByRole('combobox'), 'baz')
      userEvent.click(screen.getByRole('button', { name: 'submit' }))
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ test: 'baz' }, expect.anything())
      })
    })

    it('returns empty string when an empty value is selected', async () => {
      const onSubmit = jest.fn()
      render(<><Select name="test" options={['foo']} allowEmpty /><button type="submit">submit</button></>, { onSubmit })
      const selectInput = screen.getByRole('combobox')
      userEvent.selectOptions(selectInput, 'foo')
      userEvent.selectOptions(selectInput, '')
      userEvent.click(screen.getByRole('button', { name: 'submit' }))
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ test: '' }, expect.anything())
      })
    })
  })

  describe('Select with multiple values', () => {
    it('ignore "allowEmpty" when "multiple" is enabled', () => {
      render(<Select name="test" allowEmpty multiple options={['foo']} />)
      expect(screen.queryByRole('option', { name: '' })).not.toBeInTheDocument()
      expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    it('render initial value', () => {
      render(<Select multiple name="test" options={['foo', 'bar', 'baz']} />, { formValues: { test: ['foo', 'baz'] } })
      expect(screen.getByRole('listbox')).toHaveDisplayValue(['foo', 'baz'])
    })

    it('render new value when changed', () => {
      render(<Select multiple name="test" options={['foo', 'bar', 'baz']} />)
      const select = screen.getByRole('listbox')
      userEvent.selectOptions(select, ['bar', 'baz'])
      expect(select).toHaveDisplayValue(['bar', 'baz'])
    })

    it('save data on the form', async () => {
      const onSubmit = jest.fn()
      render(<><Select multiple name="test" options={['foo', 'bar', 'baz']} /><button type="submit">submit</button></>, { onSubmit })
      userEvent.selectOptions(screen.getByRole('listbox'), ['foo', 'bar'])
      userEvent.click(screen.getByRole('button', { name: 'submit' }))
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ test: ['foo', 'bar'] }, expect.anything())
      })
    })

    it('returns an array even if only one item is selected', async () => {
      const onSubmit = jest.fn()
      render(<><Select multiple name="test" options={['foo', 'bar', 'baz']} /><button type="submit">submit</button></>, { onSubmit })
      userEvent.selectOptions(screen.getByRole('listbox'), 'foo')
      userEvent.click(screen.getByRole('button', { name: 'submit' }))
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ test: ['foo'] }, expect.anything())
      })
    })
  })
})
