import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ArrowLeft: React.FC<IconProps> = memo(props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 1.70711C9.09763 1.31658 9.09763 0.683417 8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.292893 7.29289C0.1932 7.39259 0.118957 7.50809 0.0701632 7.63134C0.0301679 7.73213 0.00608575 7.84096 0.00101815 7.95475C-0.0052953 8.09498 0.017753 8.23629 0.0701632 8.36866C0.118957 8.49191 0.1932 8.60741 0.292893 8.70711L7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071C9.09763 15.3166 9.09763 14.6834 8.70711 14.2929L3.41421 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H3.41421L8.70711 1.70711Z"
        fill=""
      />
    </svg>
  )
})

ArrowLeft.displayName = 'ArrowLeft'
