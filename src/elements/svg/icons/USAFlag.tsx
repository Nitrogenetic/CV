import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const USAFlag: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_2431_69677)">
        <rect x="0.5" y="0.5" width="21" height="15" rx="3" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H9.5V7.5H0.5V0.5Z" fill="#1A47B8" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 0.5V1.5H21.5V0.5H9.5ZM9.5 2.5V3.5H21.5V2.5H9.5ZM9.5 4.5V5.5H21.5V4.5H9.5ZM9.5 6.5V7.5H21.5V6.5H9.5ZM0.5 8.5V9.5H21.5V8.5H0.5ZM0.5 10.5V11.5H21.5V10.5H0.5ZM0.5 12.5V13.5H21.5V12.5H0.5ZM0.5 14.5V15.5H21.5V14.5H0.5Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 1.5V2.5H2.5V1.5H1.5ZM3.5 1.5V2.5H4.5V1.5H3.5ZM5.5 1.5V2.5H6.5V1.5H5.5ZM7.5 1.5V2.5H8.5V1.5H7.5ZM6.5 2.5V3.5H7.5V2.5H6.5ZM4.5 2.5V3.5H5.5V2.5H4.5ZM2.5 2.5V3.5H3.5V2.5H2.5ZM1.5 3.5V4.5H2.5V3.5H1.5ZM3.5 3.5V4.5H4.5V3.5H3.5ZM5.5 3.5V4.5H6.5V3.5H5.5ZM7.5 3.5V4.5H8.5V3.5H7.5ZM1.5 5.5V6.5H2.5V5.5H1.5ZM3.5 5.5V6.5H4.5V5.5H3.5ZM5.5 5.5V6.5H6.5V5.5H5.5ZM7.5 5.5V6.5H8.5V5.5H7.5ZM6.5 4.5V5.5H7.5V4.5H6.5ZM4.5 4.5V5.5H5.5V4.5H4.5ZM2.5 4.5V5.5H3.5V4.5H2.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2431_69677">
          <rect x="0.5" y="0.5" width="21" height="15" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

USAFlag.displayName = 'USAFlag'
