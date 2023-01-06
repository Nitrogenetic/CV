import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const Download: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls('fill-current', className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6585 13.2526C17.0741 12.8889 17.1163 12.2571 16.7526 11.8415C16.3889 11.4259 15.7571 11.3837 15.3415 11.7474L13 13.7962V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V13.7962L8.6585 11.7474C8.24287 11.3837 7.61111 11.4259 7.24742 11.8415C6.88374 12.2571 6.92586 12.8889 7.3415 13.2526L11.3415 16.7526C11.7185 17.0825 12.2815 17.0825 12.6585 16.7526L16.6585 13.2526ZM4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16V19H4V16Z"
        fill=""
      />
    </svg>
  )
})

Download.displayName = 'Download'
