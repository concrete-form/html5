import render from '../testkit/render'
import { screen } from '@testing-library/react'
import AutoComplete from './Autocomplete'

describe('AutoComplete', () => {
  // autocomplete is a pretty boring feature in html5
  it('render autoComplete property', () => {
    render(<AutoComplete name="test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('autocomplete', 'on')
  })
})
