import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Stop: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M5.83398 7.50004C5.83398 6.57957 6.58018 5.83337 7.50065 5.83337H12.5007C13.4211 5.83337 14.1673 6.57957 14.1673 7.50004V12.5C14.1673 13.4205 13.4211 14.1667 12.5007 14.1667H7.50065C6.58018 14.1667 5.83398 13.4205 5.83398 12.5V7.50004Z"
        fill=""
      />
    </svg>
  )
})

Stop.displayName = 'Stop'
