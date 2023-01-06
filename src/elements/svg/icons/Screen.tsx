import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const Screen: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.16602 0.5H14.8327C16.2134 0.5 17.3327 1.61929 17.3327 3V9.66667C17.3327 11.0474 16.2134 12.1667 14.8327 12.1667H9.83268V13.8333H11.4993C11.9596 13.8333 12.3327 14.2064 12.3327 14.6667C12.3327 15.1269 11.9596 15.5 11.4993 15.5H8.99935H6.49935C6.03911 15.5 5.66602 15.1269 5.66602 14.6667C5.66602 14.2064 6.03911 13.8333 6.49935 13.8333H8.16602V12.1667H3.16602C1.7853 12.1667 0.666016 11.0474 0.666016 9.66667V3C0.666016 1.61929 1.7853 0.5 3.16602 0.5ZM14.8327 10.5H8.99935H3.16602C2.70578 10.5 2.33268 10.1269 2.33268 9.66667V3C2.33268 2.53976 2.70578 2.16667 3.16602 2.16667H14.8327C15.2929 2.16667 15.666 2.53976 15.666 3V9.66667C15.666 10.1269 15.2929 10.5 14.8327 10.5Z"
        fill=""
      />
    </svg>
  )
})

Screen.displayName = 'Screen'
