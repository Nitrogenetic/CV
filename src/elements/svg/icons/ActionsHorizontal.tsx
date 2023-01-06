import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ActionsHorizontal: React.FC<IconProps> = memo(props => {
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
        fill=""
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16667 8.33301C3.24619 8.33301 2.5 9.0792 2.5 9.99967C2.5 10.9201 3.24619 11.6663 4.16667 11.6663C5.08714 11.6663 5.83333 10.9201 5.83333 9.99967C5.83333 9.0792 5.08714 8.33301 4.16667 8.33301ZM10 8.33301C9.07953 8.33301 8.33333 9.0792 8.33333 9.99967C8.33333 10.9201 9.07953 11.6663 10 11.6663C10.9205 11.6663 11.6667 10.9201 11.6667 9.99967C11.6667 9.0792 10.9205 8.33301 10 8.33301ZM14.1667 9.99967C14.1667 9.0792 14.9129 8.33301 15.8333 8.33301C16.7538 8.33301 17.5 9.0792 17.5 9.99967C17.5 10.9201 16.7538 11.6663 15.8333 11.6663C14.9129 11.6663 14.1667 10.9201 14.1667 9.99967Z"
      />
    </svg>
  )
})

ActionsHorizontal.displayName = 'ActionsHorizontal'
