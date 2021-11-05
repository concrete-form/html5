import render from '../testkit/render'
import { screen } from '@testing-library/react'
import AutoComplete from './Autocomplete'

describe('AutoComplete', () => {
  // AutoComplete extend Input control, not duplicating all tests
  it('render autoComplete property', () => {
    render(<AutoComplete name="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'on')
  })
})
