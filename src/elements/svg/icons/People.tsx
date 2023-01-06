import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const People: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M9.18968 9.27215C10.1704 9.27215 10.9654 10.1421 10.9654 11.2152L10.9644 12.1846C11.0862 14.5636 9.4117 15.75 6.30644 15.75C3.2112 15.75 1.5 14.5791 1.5 12.2185V11.2152C1.5 10.1421 2.295 9.27215 3.27569 9.27215H9.18968ZM14.7148 9.27215C15.6955 9.27215 16.4905 10.1421 16.4905 11.2152L16.4896 11.8973C16.5966 14.0314 15.9062 15.1013 13.2017 15.1013C12.8346 15.1013 11.7003 15.0817 11.378 15.0425C12.0133 14.4005 12.3532 13.5293 12.352 12.4284L12.3446 12.1484L12.3465 11.2152C12.3465 10.4411 12.0362 9.74635 11.5444 9.27162L14.7148 9.27215ZM6.23518 1.5C7.86992 1.5 9.19514 2.95011 9.19514 4.73892C9.19514 6.52773 7.86992 7.97785 6.23518 7.97785C4.60043 7.97785 3.27521 6.52773 3.27521 4.73892C3.27521 2.95011 4.60043 1.5 6.23518 1.5ZM12.9433 2.79536C14.2509 2.79536 15.3109 3.95526 15.3109 5.38608C15.3109 6.81689 14.2509 7.9768 12.9433 7.9768C11.6358 7.9768 10.5758 6.81689 10.5758 5.38608C10.5758 3.95526 11.6358 2.79536 12.9433 2.79536Z"
        fill=""
      />
    </svg>
  )
})

People.displayName = 'People'
