import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Sharing: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C17.181 10 16.4196 9.75388 15.7855 9.33158L10.236 12.0133L15.6115 14.7911C16.2781 14.2942 17.1047 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.4253 14.1212 16.8789 14.3394 16.385L9.52292 13.8961C8.84729 15.1488 7.52306 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.53358 8 8.86559 8.86304 9.53684 10.1299L14.4136 7.77328C14.1488 7.23886 14 6.63681 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10ZM18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18Z"
        fill=""
      />
    </svg>
  )
})

Sharing.displayName = 'Sharing'
