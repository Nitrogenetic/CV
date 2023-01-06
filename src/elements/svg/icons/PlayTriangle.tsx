import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const PlayTriangle: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M0.803894 0.57902C1.27598 0.32637 1.84879 0.35406 2.2943 0.651067L6.64986 3.55477C7.05377 3.82404 7.29637 4.27735 7.29637 4.76278C7.29637 5.24821 7.05377 5.70153 6.64986 5.9708L2.2943 8.8745C1.84879 9.1715 1.27598 9.19919 0.803894 8.94654C0.331814 8.69389 0.0371094 8.20192 0.0371094 7.66648V1.85908C0.0371094 1.32364 0.331814 0.831669 0.803894 0.57902Z"
        fill=""
      />
    </svg>
  )
})

PlayTriangle.displayName = 'PlayTriangle'
