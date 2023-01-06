import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Badge: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.46362 3.66796C8.26815 3.27735 7.73182 3.27735 7.53636 3.66796L6.38415 5.97047L3.86891 6.33093C3.43108 6.39367 3.26075 6.95908 3.5856 7.27137L5.3855 9.0017L4.95421 11.4817C4.87748 11.9229 5.31641 12.2665 5.70164 12.0668L7.99999 10.8751L10.2983 12.0668C10.6836 12.2665 11.1225 11.9229 11.0458 11.4817L10.6145 9.0017L12.4144 7.27137C12.7392 6.95908 12.5689 6.39367 12.1311 6.33093L9.61583 5.97047L8.46362 3.66796Z"
        fill="white"
        {...otherProps}
      />
    </svg>
  )
})

Badge.displayName = 'Badge'
