import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Send: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9547 6.73431L3.3505 1.60296C2.652 1.26441 1.81133 1.55621 1.47276 2.25471C1.30012 2.61088 1.28568 3.02332 1.43298 3.39072L3.08955 7.53073H14.6654C14.5435 7.18148 14.2879 6.89498 13.9547 6.73431Z"
        fill=""
      />
      <path
        d="M3.08867 8.46777L1.43209 12.6087C1.14463 13.3317 1.49767 14.1508 2.22063 14.4383C2.38432 14.5034 2.55879 14.5372 2.73494 14.538C2.94779 14.538 3.1579 14.4899 3.34958 14.3974L13.9538 9.26419C14.2869 9.1035 14.5426 8.817 14.6645 8.46777H3.08867Z"
        fill=""
      />
    </svg>
  )
})

Send.displayName = 'Send'
