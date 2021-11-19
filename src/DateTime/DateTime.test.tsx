import render from '../testkit/render'
import { screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DateTime from './DateTime'
import { getYear, getMonth, getDate } from '../util/date'

const today = () => {
  const date = new Date()
  return `${getYear(date)}-${getMonth(date)}-${getDate(date)}`
}

describe('DateTime', () => {
  // DateTime extend Input control, not duplicating all tests

  describe('type=date', () => {
    it('render "date" input by default', () => {
      render(<DateTime name="test" placeholder="test" />)
      expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'date')
    })

    it('render "date" input', () => {
      render(<DateTime name="test" placeholder="test" type="date" />)
      expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'date')
    })

    it('ignores invalid initial date', () => {
      render(<DateTime name="test" placeholder="test" type="date" />, { formValues: { test: 'invalid' } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('')
    })

    it('parse date properly', () => {
      render(<DateTime name="test" placeholder="test" type="date" />, { formValues: { test: new Date('2001-02-03T04:05:06') } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('2001-02-03')
    })

    it('format date properly', async () => {
      const onSubmit = jest.fn()
      render(<><DateTime name="test" placeholder="test" type="date" /><button type="submit">submit</button></>, { onSubmit })
      userEvent.type(screen.getByPlaceholderText('test'), '2001-02-03')
      userEvent.click(screen.getByRole('button', { name: 'submit' }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          test: new Date('2001-02-03T00:00:00'),
        }, expect.anything())
      })
    })
  })

  describe('type=time', () => {
    it('render "time" input', () => {
      render(<DateTime name="test" placeholder="test" type="time" />)
      expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'time')
    })

    it('ignores invalid initial time', () => {
      render(<DateTime name="test" placeholder="test" type="time" />, { formValues: { test: 'invalid' } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('')
    })

    it('parse time properly', () => {
      render(<DateTime name="test" placeholder="test" type="time" />, { formValues: { test: new Date('2001-02-03T14:05:06') } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('14:05')
    })

    it('format time properly', async () => {
      const onSubmit = jest.fn()
      render(<><DateTime name="test" placeholder="test" type="time" /><button type="submit">submit</button></>, { onSubmit })
      userEvent.type(screen.getByPlaceholderText('test'), '16:59')
      userEvent.click(screen.getByRole('button', { name: 'submit' }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          test: new Date(`${today()}T16:59:00`),
        }, expect.anything())
      })
    })
  })

  describe('type=datetime', () => {
    it('render "datetime" input', () => {
      render(<DateTime name="test" placeholder="test" type="datetime" />)
      expect(screen.getByPlaceholderText('test')).toHaveAttribute('type', 'datetime-local')
    })

    it('ignores invalid initial datetime', () => {
      render(<DateTime name="test" placeholder="test" type="datetime" />, { formValues: { test: 'invalid' } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('')
    })

    it('parse datetime properly', () => {
      render(<DateTime name="test" placeholder="test" type="datetime" />, { formValues: { test: new Date('2001-02-03T14:05:06') } })
      expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('2001-02-03T14:05')
    })

    it('format datetime properly', async () => {
      const onSubmit = jest.fn()
      render(<><DateTime name="test" placeholder="test" type="datetime" /><button type="submit">submit</button></>, { onSubmit })
      // note: using fireevent since the datetime-local field is very specific to browsers and hard to simulate
      fireEvent.input(screen.getByPlaceholderText('test'), { target: { value: '2001-02-03T14:05' } })
      userEvent.click(screen.getByRole('button', { name: 'submit' }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          test: new Date('2001-02-03T14:05:00'),
        }, expect.anything())
      })
    })
  })
})
