const isValid = (date?: Date) => date instanceof Date && !isNaN(date.getTime())

export const getYear = (date: Date) => date.getFullYear().toString()
export const getMonth = (date: Date) => (date.getMonth() + 1).toString().padStart(2, '0')
export const getDate = (date: Date) => date.getDate().toString().padStart(2, '0')
export const getHours = (date: Date) => date.getHours().toString().padStart(2, '0')
export const getMinutes = (date: Date) => date.getMinutes().toString().padStart(2, '0')

export const parseTime = (value?: Date) => {
  if (typeof value === 'undefined' || !isValid(value)) {
    return
  }
  return `${getHours(value)}:${getMinutes(value)}`
}

export const formatTime = (value: string) => {
  const date = new Date()
  const today = `${getYear(date)}-${getMonth(date)}-${getDate(date)}`
  const newDate = new Date(`${today}T${value}:00`)
  /* istanbul ignore if ; hard to test since it's based on browser */
  if (!isValid(newDate)) {
    return undefined
  }
  return newDate
}

export const parseDate = (value?: Date) => {
  if (typeof value === 'undefined' || !isValid(value)) {
    return
  }
  return `${getYear(value)}-${getMonth(value)}-${getDate(value)}`
}

export const formatDate = (value: string) => {
  const newDate = new Date(`${value}T00:00:00`)
  /* istanbul ignore if ; hard to test since it's based on browser */
  if (!isValid(newDate)) {
    return undefined
  }
  return newDate
}

export const parseDateTime = (value?: Date) => {
  if (typeof value === 'undefined' || !isValid(value)) {
    return
  }
  return `${getYear(value)}-${getMonth(value)}-${getDate(value)}T${getHours(value)}:${getMinutes(value)}:00`
}

export const formatDateTime = (value: string) => {
  const newDate = new Date(value)
  /* istanbul ignore if ; hard to test since it's based on browser */
  if (!isValid(newDate)) {
    return undefined
  }
  return newDate
}
