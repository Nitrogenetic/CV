import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const HalfChart: React.FC<IconProps> = memo(props => {
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
        d="M9.84286 2.00018C11.9229 2.00018 13.9177 2.82646 15.3885 4.29725C16.8593 5.76803 17.6855 7.76285 17.6855 9.84286C17.6855 11.9229 16.8593 13.9177 15.3885 15.3885C13.9177 16.8593 11.9229 17.6855 9.84286 17.6855L9.84286 9.84286L9.84286 2.00018Z"
        fill=""
        stroke="transparent"
      />
    </svg>
  )
})

HalfChart.displayName = 'HalfChart'
