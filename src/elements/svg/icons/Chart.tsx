import React from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Chart: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current stroke-current', className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M16.3322 8.99997C16.3322 13.0497 13.0493 16.3326 8.9996 16.3326C4.94991 16.3326 1.66699 13.0497 1.66699 8.99997C1.66699 4.95028 4.94991 1.66736 8.9996 1.66736C13.0493 1.66736 16.3322 4.95028 16.3322 8.99997Z"
        stroke=""
        strokeWidth="2"
        fill={'transparent'}
      />
      <path
        d="M8.99942 0.667415C10.6475 0.667415 12.2585 1.15611 13.6288 2.07171C14.9991 2.98731 16.0671 4.28869 16.6977 5.81128C17.3284 7.33386 17.4934 9.00927 17.1719 10.6256C16.8504 12.242 16.0568 13.7267 14.8915 14.8921C13.7261 16.0574 12.2414 16.851 10.625 17.1725C9.00866 17.494 7.33325 17.329 5.81067 16.6984C4.28808 16.0677 2.9867 14.9997 2.07111 13.6294C1.15551 12.2591 0.666807 10.6481 0.666808 9.00003L8.99942 9.00003L8.99942 0.667415Z"
        fill=""
        stroke={'transparent'}
      />
    </svg>
  )
}

Chart.displayName = 'Chart'
