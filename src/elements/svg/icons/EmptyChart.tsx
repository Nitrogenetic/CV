import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const EmptyChart: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('stroke-current', className)}
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
      />
    </svg>
  )
})

EmptyChart.displayName = 'EmptyChart'
