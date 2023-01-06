import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Preview: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M0.833374 2.33366C0.833374 1.41318 1.57957 0.666992 2.50004 0.666992H5.83337C6.29361 0.666992 6.66671 1.04009 6.66671 1.50033C6.66671 1.96056 6.29361 2.33366 5.83337 2.33366H2.50004V4.00033C2.50004 4.46056 2.12694 4.83366 1.66671 4.83366C1.20647 4.83366 0.833374 4.46056 0.833374 4.00033V2.33366Z"
        fill=""
      />
      <path
        d="M9.99925 11.1875C11.2006 11.1875 12.1746 10.2082 12.1746 9.00014C12.1746 7.79212 11.2006 6.81283 9.99925 6.81283C8.79785 6.81283 7.82393 7.79212 7.82393 9.00014C7.82393 10.2082 8.79785 11.1875 9.99925 11.1875Z"
        fill=""
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99924 3.79199C13.2053 3.79199 15.9879 5.63545 17.1461 8.30611C17.3381 8.74873 17.3381 9.25119 17.1461 9.69381C15.9879 12.3645 13.2053 14.2079 9.99924 14.2079C6.79315 14.2079 4.01054 12.3645 2.85234 9.6938C2.66038 9.25118 2.66038 8.74872 2.85234 8.3061C4.01055 5.63545 6.79315 3.79199 9.99924 3.79199ZM13.75 9.00033C13.75 11.0714 12.0711 12.7503 10 12.7503C7.92897 12.7503 6.25004 11.0714 6.25004 9.00033C6.25004 6.92926 7.92897 5.25033 10 5.25033C12.0711 5.25033 13.75 6.92926 13.75 9.00033Z"
        fill=""
      />
      <path
        d="M17.5 17.3337C18.4205 17.3337 19.1667 16.5875 19.1667 15.667V14.0003C19.1667 13.5401 18.7936 13.167 18.3334 13.167C17.8731 13.167 17.5 13.5401 17.5 14.0003V15.667H14.1667C13.7065 15.667 13.3334 16.0401 13.3334 16.5003C13.3334 16.9606 13.7065 17.3337 14.1667 17.3337H17.5Z"
        fill=""
      />
      <path
        d="M17.5 0.666992C18.4205 0.666992 19.1667 1.41318 19.1667 2.33366V4.00033C19.1667 4.46056 18.7936 4.83366 18.3334 4.83366C17.8731 4.83366 17.5 4.46056 17.5 4.00033V2.33366L14.1667 2.33366C13.7065 2.33366 13.3334 1.96056 13.3334 1.50033C13.3334 1.04009 13.7065 0.666992 14.1667 0.666992H17.5Z"
        fill=""
      />
      <path
        d="M0.833374 15.667C0.833374 16.5875 1.57957 17.3337 2.50004 17.3337H5.83337C6.29361 17.3337 6.66671 16.9606 6.66671 16.5003C6.66671 16.0401 6.29361 15.667 5.83337 15.667H2.50004L2.50004 14.0003C2.50004 13.5401 2.12695 13.167 1.66671 13.167C1.20647 13.167 0.833374 13.5401 0.833374 14.0003V15.667Z"
        fill=""
      />
    </svg>
  )
})

Preview.displayName = 'Preview'
