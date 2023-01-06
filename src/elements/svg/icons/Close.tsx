import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Close: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M13.5774 14.7559C13.9028 15.0814 14.4305 15.0814 14.7559 14.7559C15.0814 14.4305 15.0814 13.9028 14.7559 13.5774L11.1785 10L14.7559 6.42259C15.0814 6.09715 15.0814 5.56951 14.7559 5.24408C14.4305 4.91864 13.9028 4.91864 13.5774 5.24408L10 8.82149L6.42259 5.24408C6.09715 4.91864 5.56951 4.91864 5.24408 5.24408C4.91864 5.56951 4.91864 6.09715 5.24408 6.42259L8.82149 10L5.24408 13.5774C4.91864 13.9028 4.91864 14.4305 5.24408 14.7559C5.56951 15.0814 6.09715 15.0814 6.42259 14.7559L10 11.1785L13.5774 14.7559Z"
        fill=""
      />
    </svg>
  )
})

Close.displayName = 'Close'
