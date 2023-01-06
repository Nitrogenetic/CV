import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ArrowChevronDownFilled: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current', className)}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M9.75595 1.92259C9.99428 1.68426 10.0656 1.32583 9.93659 1.01443C9.80761 0.703035 9.50374 0.5 9.16669 0.5H0.833358C0.496306 0.5 0.192443 0.703035 0.0634582 1.01443C-0.0655262 1.32583 0.00577043 1.68426 0.244102 1.92259L4.41077 6.08925C4.73621 6.41469 5.26384 6.41469 5.58928 6.08926L9.75595 1.92259Z"
        fill="#1F1F1F"
      />
    </svg>
  )
})

ArrowChevronDownFilled.displayName = 'ArrowChevronDownFilled'
