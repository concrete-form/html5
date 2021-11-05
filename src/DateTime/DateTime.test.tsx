import render from '../testkit/render'
import { screen } from '@testing-library/react'
import DateTime from './DateTime'

describe('DateTime', () => {
  // DateTime extend Input control, not duplicating all tests
  it('render "date" input by default', () => {
    render(<DateTime name="test" placeholder="test" />)
    expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'date')
  })

  it('render "time" input', () => {
    render(<DateTime name="test" placeholder="test" type="time" />)
    expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'time')
  })

  it('render "date" input', () => {
    render(<DateTime name="test" placeholder="test" type="date" />)
    expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'date')
  })

  it('render "datetime" input', () => {
    render(<DateTime name="test" placeholder="test" type="datetime" />)
    expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'datetime-local')
  })
})
