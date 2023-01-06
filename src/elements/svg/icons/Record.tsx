import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Record: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003ZM3.33268 10.0003C3.33268 6.31843 6.31745 3.33366 9.99935 3.33366C13.6812 3.33366 16.666 6.31843 16.666 10.0003C16.666 13.6822 13.6812 16.667 9.99935 16.667C6.31745 16.667 3.33268 13.6822 3.33268 10.0003ZM9.99935 7.50033C8.61864 7.50033 7.49935 8.61961 7.49935 10.0003C7.49935 11.381 8.61864 12.5003 9.99935 12.5003C11.3801 12.5003 12.4993 11.381 12.4993 10.0003C12.4993 8.61961 11.3801 7.50033 9.99935 7.50033Z"
        fill=""
      />
    </svg>
  )
})

Record.displayName = 'Record'
