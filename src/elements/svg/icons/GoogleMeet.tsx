import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const GoogleMeet: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M4.5 6V12H10.5V6H4.5Z" fill="white" />
      <path d="M1.125 6.375V11.625L3 12L4.875 11.625V6.375L3 6L1.125 6.375Z" fill="#1E88E5" />
      <path
        d="M13.875 9V14.25C13.875 14.8714 13.3714 15.375 12.75 15.375H4.875L4.5 13.5L4.875 11.625H10.125V9L12 8.625L13.875 9Z"
        fill="#4CAF50"
      />
      <path
        d="M13.875 3.75V9H10.125V6.375H4.875L4.5 4.5L4.875 2.625H12.75C13.3714 2.625 13.875 3.12863 13.875 3.75Z"
        fill="#FBC02D"
      />
      <path d="M4.875 11.625V15.375H2.25C1.62863 15.375 1.125 14.8714 1.125 14.25V11.625H4.875Z" fill="#1565C0" />
      <path d="M4.875 2.625V6.375H1.125L4.875 2.625Z" fill="#E53935" />
      <path d="M14.25 9.00005L13.875 12.1688L10.125 9.00005L13.875 5.8313L14.25 9.00005Z" fill="#2E7D32" />
      <path
        d="M17.25 3.79136V14.2089C17.25 14.5239 16.8825 14.7001 16.6387 14.5014L13.875 12.1689V5.83136L16.6387 3.49886C16.8825 3.30011 17.25 3.47636 17.25 3.79136Z"
        fill="#4CAF50"
      />
    </svg>
  )
})

GoogleMeet.displayName = 'GoogleMeet'
