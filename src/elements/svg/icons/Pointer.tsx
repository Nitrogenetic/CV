import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const Pointer: React.FC<IconProps> = memo(props => {
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
        d="M16.5487 12.1637L12.0455 18.7203L7.50811 12.1855C6.76428 10.7087 6.68438 8.94769 7.29099 7.40024C9.04849 2.91683 14.9513 2.90133 16.7347 7.38581C17.3475 8.92687 17.2791 10.6851 16.5487 12.1637ZM18.1983 13.1099L13.1142 20.8423L13.1135 20.8438L13.0642 20.9436L12.5873 21.6568C12.3503 22.1366 11.713 22.1391 11.4723 21.6613L11.0438 20.9518L10.9937 20.8523L10.993 20.8509L5.86579 13.1451C4.85099 11.1302 4.74198 8.7277 5.56957 6.61652C7.96992 0.493191 16.0219 0.482173 18.4522 6.59367C19.2878 8.69494 19.1949 11.0925 18.1983 13.1099ZM12.9778 9.38272C12.9791 9.9386 12.5619 10.3903 12.0459 10.3915C11.5299 10.3928 11.1105 9.94318 11.1092 9.3873C11.1078 8.83142 11.525 8.37976 12.041 8.3785C12.557 8.37723 12.9764 8.82684 12.9778 9.38272ZM14.8463 9.37814C14.8504 11.0458 13.5988 12.4008 12.0509 12.4045C10.5029 12.4083 9.24469 11.0595 9.2406 9.39187C9.23652 7.72423 10.4881 6.36926 12.0361 6.36547C13.5841 6.36168 14.8423 7.7105 14.8463 9.37814Z"
        fill=""
      />
    </svg>
  )
})
Pointer.displayName = 'Pointer'
