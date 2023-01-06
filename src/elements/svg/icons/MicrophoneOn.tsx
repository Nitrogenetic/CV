import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const MicrophoneOn: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66536 5.00033L6.66536 9.16699C6.66536 11.0079 8.15775 12.5003 9.9987 12.5003C11.8396 12.5003 13.332 11.0079 13.332 9.16699L13.332 5.00033C13.332 3.15938 11.8396 1.66699 9.9987 1.66699C8.15775 1.66699 6.66536 3.15938 6.66536 5.00033ZM9.9987 3.33366C10.9192 3.33366 11.6654 4.07985 11.6654 5.00033L11.6654 9.16699C11.6654 10.0875 10.9192 10.8337 9.9987 10.8337C9.07822 10.8337 8.33203 10.0875 8.33203 9.16699L8.33203 5.00033C8.33203 4.07985 9.07822 3.33366 9.9987 3.33366ZM15.832 8.33366C15.3718 8.33366 14.9987 8.70676 14.9987 9.16699C14.9987 11.9284 12.7601 14.167 9.9987 14.167C7.23727 14.167 4.9987 11.9284 4.9987 9.16699C4.9987 8.70676 4.6256 8.33366 4.16536 8.33366C3.70513 8.33366 3.33203 8.70676 3.33203 9.16699C3.33203 12.5667 5.87677 15.372 9.16536 15.7821V17.5003C9.16536 17.9606 9.53846 18.3337 9.9987 18.3337C10.4589 18.3337 10.832 17.9606 10.832 17.5003V15.7821C14.1206 15.372 16.6654 12.5667 16.6654 9.16699C16.6654 8.70675 16.2923 8.33366 15.832 8.33366Z"
        fill=""
      />
    </svg>
  )
})

MicrophoneOn.displayName = 'MicrophoneOn'