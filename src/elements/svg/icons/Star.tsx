import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Star: React.FC<IconProps> = memo(props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.833374C6.1806 0.833374 0.833374 3.12504 0.833374 10C0.833374 16.875 5.41671 19.1667 10 19.1667C14.5834 19.1667 19.1667 16.875 19.1667 10C19.1667 3.12504 13.8195 0.833374 10 0.833374ZM10.9375 5.41671C10.9375 4.89894 10.5178 4.47921 10 4.47921C9.48227 4.47921 9.06254 4.89894 9.06254 5.41671V10C9.06254 10.2487 9.16131 10.4871 9.33713 10.663L11.0038 12.3296C11.3699 12.6957 11.9635 12.6957 12.3296 12.3296C12.6957 11.9635 12.6957 11.3699 12.3296 11.0038L10.9375 9.61171V5.41671Z"
        fill=""
      />
    </svg>
  )
})

Star.displayName = 'Star'
