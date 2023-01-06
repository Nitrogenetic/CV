import React, { useState } from 'react'
import { act, cleanup, fireEvent, render, renderHook } from '@testing-library/react'
import { DatePicker } from '~ui'
import dayjs from 'dayjs'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

const getRandomDate = (min: number, max: number) => {
  return Math.round(min + Math.random() * (max + 1 - min))
}

const defaultProps = {
  dates: [dayjs()],
  onDateChange: jest.fn()
}

describe('Date Picker element', () => {
  it('should be in document', async () => {
    const { container } = render(<DatePicker {...defaultProps} />)
    const datePicker = container.firstChild
    expect(datePicker).toBeInTheDocument()
  })

  // it('should return current date', async () => {
  //   const mockedStartDate = dayjs().startOf('date')
  //   const randomDate = mockedStartDate.add(1, 'day')

  //   const { result } = renderHook(() => useState([mockedStartDate]))

  //   const props = {
  //     dates: result.current[0],
  //     onDateChange: jest.fn((value, result) => result.current[1](value))
  //   }

  //   const { getByTestId, rerender } = render(<DatePicker {...props} />)
  //   const currentDatePickerDay = getByTestId(randomDate.toString())

  //   fireEvent.click(currentDatePickerDay)

  //   act(() => {
  //     rerender(<DatePicker {...props} dates={result.current[0]} />)
  //   })

  //   expect(result.current[0]).toBe(randomDate)
  // })
})
