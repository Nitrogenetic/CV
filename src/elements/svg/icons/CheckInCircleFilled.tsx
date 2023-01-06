import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const CheckInCircleFilled: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666748 8.99996C0.666748 4.39759 4.39771 0.666626 9.00008 0.666626C13.6025 0.666626 17.3334 4.39759 17.3334 8.99996C17.3334 13.6023 13.6025 17.3333 9.00008 17.3333C4.39771 17.3333 0.666748 13.6023 0.666748 8.99996ZM9.33008 10.8565L12.8383 7.38462C13.0554 7.16983 13.0554 6.82223 12.8383 6.60641L12.3537 6.16075C12.1366 5.94597 11.7842 5.94597 11.5671 6.16075L7.94358 9.72839L6.44165 8.21809C6.22455 8.00331 5.87215 8.00331 5.65506 8.21809L5.16324 8.69928C4.94614 8.91406 4.94614 9.2627 5.16324 9.47749L6.55708 10.8565L7.55028 11.8391C7.76738 12.0539 8.11978 12.0539 8.33688 11.8391L9.33008 10.8565Z"
        fill=""
      />
    </svg>
  )
})

CheckInCircleFilled.displayName = 'CheckInCircleFilled'
