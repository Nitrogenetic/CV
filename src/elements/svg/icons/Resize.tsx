import cls from 'classnames'
import React, { FC } from 'react'
import { IconProps } from '~icons'

export const Resize: FC<IconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg
      width="5"
      height="20"
      viewBox="0 0 5 20"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
      className={cls('fill-current', className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833333 20C1.29357 20 1.66667 19.5523 1.66667 19L1.66667 1C1.66667 0.447716 1.29357 5.65438e-08 0.833335 3.64262e-08C0.373097 1.63086e-08 7.75158e-07 0.447716 7.51017e-07 1L-8.30516e-07 19C-8.54657e-07 19.5523 0.373095 20 0.833333 20ZM4.16667 20C4.6269 20 5 19.5523 5 19L5 1C5 0.447716 4.62691 2.02248e-07 4.16667 1.82131e-07C3.70643 1.62013e-07 3.33333 0.447716 3.33333 1L3.33333 19C3.33333 19.5523 3.70643 20 4.16667 20Z"
        fill=""
        fillOpacity="0.9"
      />
    </svg>
  )
}
