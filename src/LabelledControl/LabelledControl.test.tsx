import render from '../testkit/render'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LabelledControl from './LabelledControl'
import Input from '../Input'
import Radio from '../Radio'

describe('LabelledControl', () => {
  it('render the label', () => {
    render(<LabelledControl label="test-label" />)
    expect(screen.getByText('test-label')).toBeInTheDocument()
  })

  it('render the component label', () => {
    render(<LabelledControl label={<span data-testid="foo">test-label</span>} />)
    expect(screen.getByText('test-label')).toBeInTheDocument()
    expect(screen.getByTestId('foo')).toBeInTheDocument()
  })

  it('render the label at left by default', () => {
    render(<LabelledControl label="label-test" />)
    expect(screen.getByTestId('labelled-control')).toHaveClass('concreteform-left')
  })

  it('render the label at required position', () => {
    render(<LabelledControl label="label-test" labelPosition="top" />)
    expect(screen.getByTestId('labelled-control')).toHaveClass('concreteform-top')
  })

  it('render the control', () => {
    render(<LabelledControl label="label-test"><Input name="testInput" /></LabelledControl>)
    expect(screen.getByRole('textbox', { name: 'label-test' })).toBeInTheDocument()
  })

  it('link the label and control', () => {
    render(<LabelledControl label="label-test"><Input name="testInput" /></LabelledControl>)
    userEvent.click(screen.getByText('label-test'))
    expect(screen.getByRole('textbox', { name: 'label-test' })).toHaveFocus()
  })

  it('doesn\'t link the label and control for input groups', () => {
    render(<LabelledControl label="label-test"><Radio name="testInput" options={['foo']} /></LabelledControl>)
    const radioInput = screen.getByRole('radio', { name: 'foo' })
    expect(radioInput).not.toBeChecked()
    userEvent.click(screen.getByText('label-test'))
    expect(radioInput).not.toBeChecked()
  })
})
