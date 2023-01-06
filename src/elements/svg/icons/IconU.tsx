import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const IconU: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M5.59561 1.11354C5.59561 1.72489 5.09091 2.22707 4.47649 2.22707H4.01567V7.89083C4.01567 9.22271 4.52038 10.7729 7 10.7729C9.47962 10.7729 9.98433 9.22271 9.98433 7.89083V2.22707H9.52351C8.90909 2.22707 8.40439 1.72489 8.40439 1.11354C8.40439 0.502183 8.90909 0 9.52351 0H12.8809C13.4953 0 14 0.502183 14 1.11354C14 1.72489 13.4953 2.22707 12.8809 2.22707H12.5298V7.89083C12.5298 10.3799 11.4326 13 7 13C2.5674 13 1.47022 10.3799 1.47022 7.89083V2.22707H1.11912C0.504702 2.22707 0 1.72489 0 1.11354C0 0.502183 0.504702 0 1.11912 0H4.47649C5.09091 0 5.59561 0.502183 5.59561 1.11354Z"
        fill=""
      />
      <path
        d="M1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H1Z"
        fill=""
      />
    </svg>
  )
})

IconU.displayName = 'IconU'
