import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Shape: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.76535 0.5C1.05263 0.5 0.695699 1.36171 1.19967 1.86569L3.43497 4.10098C3.74739 4.4134 4.25392 4.4134 4.56634 4.10098L6.80164 1.86568C7.30561 1.36171 6.94867 0.5 6.23595 0.5H1.76535Z"
        fill=""
      />
    </svg>
  )
})

Shape.displayName = 'Shape'
