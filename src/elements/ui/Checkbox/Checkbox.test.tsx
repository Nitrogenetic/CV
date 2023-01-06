import React, { useState } from 'react'
import { cleanup, render, renderHook, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '~ui'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('Checkbox element', () => {
  const defaultProps = { name: 'checkbox' }

  it('should be in document', async () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />)
    const button = getByRole('checkbox')
    expect(button).toBeInTheDocument()
  })

  // it('handles onChange event', async () => {
  //   const { result } = renderHook(() => useState(false))

  //   const props = {
  //     ...defaultProps,
  //     value: result.current[0],
  //     onClick: jest.fn((_, result) => !result.current[0])
  //   }

  //   const { getByRole, rerender } = render(<Checkbox {...props} />)

  //   const checkbox = getByRole('checkbox')

  //   expect(checkbox).not.toBeChecked()
  //   expect(checkbox).not.toHaveFocus()
  //   expect(result.current[0]).toBe(false)

  //   fireEvent.click(checkbox)

  //   act(() => {
  //     rerender(<Checkbox {...props} value={result.current[0]} />)
  //   })

  //   expect(props.onClick).toHaveBeenCalledTimes(1)
  //   expect(checkbox).toBeChecked()
  //   expect(checkbox).toHaveFocus()
  //   expect(result.current[0]).toBe(true)

  //   act(() => {
  //     userEvent.click(checkbox)
  //   })

  //   expect(props.onClick).toHaveBeenCalledTimes(2)
  //   expect(checkbox).not.toBeChecked()
  //   expect(checkbox).toHaveFocus()
  //   expect(result.current[0]).toBe(false)
  // })

  it('handles onFocus/onBlur events', async () => {
    const props = {
      ...defaultProps,
      onFocus: jest.fn(),
      onBlur: jest.fn()
    }

    const { getByRole } = render(<Checkbox {...props} />)

    const checkbox = getByRole('checkbox')

    expect(checkbox).not.toHaveFocus()

    userEvent.tab()

    expect(props.onFocus).toHaveBeenCalledTimes(1)
    expect(props.onBlur).toHaveBeenCalledTimes(0)
    expect(checkbox).toHaveFocus()

    userEvent.tab()

    expect(props.onFocus).toHaveBeenCalledTimes(1)
    expect(props.onBlur).toHaveBeenCalledTimes(1)
    expect(checkbox).not.toHaveFocus()
  })
})
