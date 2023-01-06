import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const Plus: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M6.83317 0.999837C6.83317 0.5396 6.46007 0.166504 5.99984 0.166504C5.5396 0.166504 5.1665 0.5396 5.1665 0.999837V5.1665H0.999837C0.5396 5.1665 0.166504 5.5396 0.166504 5.99984C0.166504 6.46007 0.5396 6.83317 0.999837 6.83317H5.1665V10.9998C5.1665 11.4601 5.5396 11.8332 5.99984 11.8332C6.46007 11.8332 6.83317 11.4601 6.83317 10.9998V6.83317H10.9998C11.4601 6.83317 11.8332 6.46007 11.8332 5.99984C11.8332 5.5396 11.4601 5.1665 10.9998 5.1665H6.83317V0.999837Z"
        fill=""
      />
    </svg>
  )
})

Plus.displayName = 'Plus'
