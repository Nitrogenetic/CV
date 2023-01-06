import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ThreeQuartersChart: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current stroke-current', className)}
      width="20"
      height="20"
      viewBox="2 2 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M16.6854 9.84268C16.6854 13.6218 13.6218 16.6854 9.84268 16.6854C6.06357 16.6854 3 13.6218 3 9.84268C3 6.06357 6.06357 3 9.84268 3C13.6218 3 16.6854 6.06357 16.6854 9.84268Z"
        stroke=""
        strokeWidth="2"
        fill="transparent"
      />
      <path
        d="M9.84286 2.00018C11.394 2.00018 12.9103 2.46014 14.2 3.32191C15.4897 4.18367 16.495 5.40853 17.0886 6.8416C17.6822 8.27466 17.8375 9.85156 17.5349 11.3729C17.2322 12.8942 16.4853 14.2917 15.3885 15.3885C14.2917 16.4853 12.8942 17.2322 11.3729 17.5349C9.85156 17.8375 8.27466 17.6822 6.8416 17.0886C5.40854 16.495 4.18367 15.4897 3.32191 14.2C2.46015 12.9103 2.00018 11.394 2.00018 9.84286L9.84286 9.84286L9.84286 2.00018Z"
        fill=""
        stroke="transparent"
      />
    </svg>
  )
})

ThreeQuartersChart.displayName = 'ThreeQuartersChart'
