import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const ShortText: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="5"
      viewBox="0 0 16 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.6667 1.66667C15.1269 1.66667 15.5 1.29357 15.5 0.833334C15.5 0.373097 15.1269 3.26171e-08 14.6667 7.28523e-08L1.33333 2.84815e-07C0.873095 -6.28624e-07 0.5 0.373096 0.5 0.833333C0.5 1.29357 0.873095 1.66667 1.33333 1.66667L14.6667 1.66667Z"
        fill="#919191"
      />
      <path
        d="M10.1667 5C10.6269 5 11 4.6269 11 4.16667C11 3.70643 10.6269 3.33333 10.1667 3.33333L1.33333 3.33333C0.873097 3.33334 0.5 3.70643 0.5 4.16667C0.5 4.62691 0.873097 5 1.33333 5L10.1667 5Z"
        fill="#919191"
      />
    </svg>
  )
})

ShortText.displayName = 'ShortText'
