import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const Checkbox: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <rect width="16" height="16" rx="3" fill="#393D56" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4911 4.66599C12.7216 4.89108 12.7259 5.2604 12.5008 5.49089L6.80423 11.3242C6.68945 11.4418 6.53042 11.5055 6.36623 11.4996C6.20204 11.4938 6.04792 11.419 5.94174 11.2937L3.47169 8.37699C3.26349 8.13114 3.29401 7.76305 3.53985 7.55485C3.7857 7.34665 4.15379 7.37716 4.36199 7.62301L6.4176 10.0503L11.6662 4.67577C11.8913 4.44528 12.2606 4.4409 12.4911 4.66599Z"
        fill=""
      />
    </svg>
  )
})

Checkbox.displayName = 'Checkbox'
