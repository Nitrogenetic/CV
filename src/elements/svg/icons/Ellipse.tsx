import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Ellipse: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        // opacity="0.34"
        d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM1.54 14C1.54 20.8815 7.11853 26.46 14 26.46C20.8815 26.46 26.46 20.8815 26.46 14C26.46 7.11853 20.8815 1.54 14 1.54C7.11853 1.54 1.54 7.11853 1.54 14Z"
        fill=""
      />
    </svg>
  )
})

Ellipse.displayName = 'Ellipse'
