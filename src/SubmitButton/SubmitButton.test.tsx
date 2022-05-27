import render from '../testkit/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'
import SubmitButton from './SubmitButton'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

describe('SubmitButton', () => {
  it('render type submit', () => {
    render(<SubmitButton>Foo</SubmitButton>)
    expect(screen.getByRole('button')).toHaveProperty('type', 'submit')
  })

  it('render children property', () => {
    render(<SubmitButton>Foo</SubmitButton>)
    expect(screen.getByRole('button', { name: 'Foo' })).toBeInTheDocument()
  })

  it('render other props to the button', () => {
    render(<SubmitButton data-test="foo">Foo</SubmitButton>)
    expect(screen.getByRole('button').dataset.test).toBe('foo')
  })

  it('submit the form when clicked', async () => {
    const onSubmit = jest.fn()
    render(<SubmitButton>Foo</SubmitButton>, { onSubmit })
    await userEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it('is disabled when there are errors on the form', async () => {
    render(<><Input name="test" fieldProps={{ required: true }} /><SubmitButton>submit</SubmitButton></>)
    const input = screen.getByRole('textbox')
    await userEvent.click(input)
    await userEvent.click(document.body)
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  it('is disabled when submitting and enabled back after', async () => {
    render(<SubmitButton>submit</SubmitButton>, { onSubmit: jest.fn(async () => await wait(50)) })
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toBeDisabled()
    await waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled()
    })
  })

  it('render ... by default when loading and disapear after', async () => {
    render(<SubmitButton>submit</SubmitButton>, { onSubmit: jest.fn(async () => await wait(50)) })
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('submit...')
    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent('submit')
    })
  })

  it('Doesn\'t render loading component when "displayLoading" is disabled', async () => {
    render(<SubmitButton displayLoading={false}>submit</SubmitButton>, { onSubmit: jest.fn(async () => await wait(50)) })
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toBeDisabled()
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeEnabled()
    })
    expect(screen.getByRole('button')).toHaveTextContent('submit')
  })

  it('render custom loading component and disapear after', async () => {
    render(<SubmitButton loadingComponent={<span data-testid="custom">custom</span>}> submit</SubmitButton>, { onSubmit: jest.fn(async () => await wait(50)) })
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('submitcustom')
    await waitFor(() => {
      expect(screen.getByTestId('custom')).toBeInTheDocument()
    })
    expect(screen.getByTestId('custom')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('submit')
  })

  it('render alternate content while loading and is reverted back after', async () => {
    render(<SubmitButton alternateLoadingContent={<span data-testid="custom">custom</span>}> submit</SubmitButton>, { onSubmit: jest.fn(async () => await wait(50)) })
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('custom')
    expect(screen.getByTestId('custom')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent('submit')
    })
  })
})
