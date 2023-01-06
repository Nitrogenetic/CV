import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const Grid: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 0.5H8H11.75H14C14.8284 0.5 15.5 1.17157 15.5 2V4.25V8V11.75V14C15.5 14.8284 14.8284 15.5 14 15.5H11.75H8H4.25H2C1.17157 15.5 0.5 14.8284 0.5 14V11.75V8V4.25V2C0.5 1.17157 1.17157 0.5 2 0.5H4.25ZM2 3.5V2H3.5V3.5L2 3.5ZM2 5V7.25H3.5V5H2ZM2 8.75V11H3.5V8.75H2ZM2 12.5V14H3.5V12.5H2ZM5 14H7.25V12.5H5V14ZM8.75 14H11V12.5H8.75V14ZM12.5 14H14V12.5L12.5 12.5V14ZM14 11V8.75H12.5V11H14ZM14 7.25V5H12.5V7.25H14ZM14 3.5V2H12.5V3.5L14 3.5ZM11 2H8.75V3.5H11V2ZM7.25 2V3.5H5V2H7.25ZM11 8.75V11H8.75V8.75H11ZM7.25 8.75V11H5V8.75H7.25ZM5 7.25H7.25V5H5V7.25ZM8.75 7.25H11V5H8.75V7.25Z"
        fill=""
      />
    </svg>
  )
})

Grid.displayName = 'Grid'
