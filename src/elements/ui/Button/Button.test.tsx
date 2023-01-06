import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Button, ButtonKindType, ButtonProps, ButtonSizeType } from '~ui'
import userEvent from '@testing-library/user-event'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('Button element', () => {
  it('should be in document', async () => {
    const { getByText } = render(<Button>Hello</Button>)
    const button = getByText('Hello')
    expect(button).toBeInTheDocument()
  })

  // it('handles onClick event', async () => {
  //   const mockedFunction = jest.fn()
  //   const { getByText } = render(<Button onClick={mockedFunction}>Hello</Button>)
  //   const button = getByText('Hello')

  //   fireEvent.click(button)

  //   expect(mockedFunction).toHaveBeenCalledTimes(1)
  // })

  // it('handles onFocus/onBlur events', async () => {
  //   const eventsProps = {
  //     onFocus: jest.fn(),
  //     onBlur: jest.fn()
  //   }

  //   const { getByText } = render(<Button {...eventsProps}>Hello</Button>)

  //   const button = getByText('Hello')

  //   expect(button).not.toHaveFocus()

  //   userEvent.tab()

  //   expect(eventsProps.onFocus).toHaveBeenCalledTimes(1)
  //   expect(eventsProps.onBlur).toHaveBeenCalledTimes(0)
  //   expect(button).toHaveFocus()

  //   userEvent.tab()

  //   expect(eventsProps.onFocus).toHaveBeenCalledTimes(1)
  //   expect(eventsProps.onBlur).toHaveBeenCalledTimes(1)
  //   expect(button).not.toHaveFocus()
  // })
})
