import render from '../testkit/render'
import { screen } from '@testing-library/react'
import Slider from './Slider'

describe('Slider', () => {
  // Slider extend Input control, not duplicating all tests
  it('render type range', () => {
    render(<Slider name="test" />)
    expect(screen.getByRole('slider')).toHaveAttribute('type', 'range')
  })

  it('render label', () => {
    render(<Slider name="test" label="test-label" />)
    expect(screen.getByRole('slider', { name: 'test-label' })).toBeInTheDocument()
    expect(screen.getByText('test-label')).toBeInTheDocument()
  })

  it('render component label', () => {
    render(<Slider name="test" label={<div data-testid="foo">test-label</div>} />)
    expect(screen.getByRole('slider', { name: 'test-label' })).toBeInTheDocument()
    expect(screen.getByText('test-label')).toBeInTheDocument()
    expect(screen.getByTestId('foo')).toBeInTheDocument()
  })

  it('render label top by default', () => {
    render(<Slider name="test" label="test-label" />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-top')
  })

  it('render label in the required position', () => {
    render(<Slider name="test" label="test-label" labelPosition="bottom" />)
    expect(screen.getByTestId('item-label')).toHaveClass('concreteform-bottom')
  })
})
