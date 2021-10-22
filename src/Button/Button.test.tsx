import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('renders button content', () => {
    render(<Button>foo</Button>)
    expect(screen.getByRole('button', { name: 'foo' })).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('add background color', () => {
    render(<Button backgroundColor="#f00" />)
    expect(screen.getByRole('button')).toHaveStyle('background-color: #f00')
  })
})
