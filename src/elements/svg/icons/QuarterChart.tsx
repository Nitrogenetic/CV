import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const QuarterChart: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('stroke-current fill-current', className)}
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
        d="M9.84286 2.00018C10.8728 2.00018 11.8926 2.20303 12.8441 2.59717C13.7956 2.9913 14.6602 3.56899 15.3885 4.29725C16.1167 5.02551 16.6944 5.89008 17.0886 6.8416C17.4827 7.79312 17.6855 8.81295 17.6855 9.84286L9.84286 9.84286L9.84286 2.00018Z"
        fill=""
        stroke="transparent"
      />
    </svg>
  )
})

QuarterChart.displayName = 'QuarterChart'
