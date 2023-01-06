import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Pause: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666016 8.99984C0.666016 13.6022 4.39698 17.3332 8.99935 17.3332C13.6017 17.3332 17.3327 13.6022 17.3327 8.99984C17.3327 4.39747 13.6017 0.666504 8.99935 0.666504C4.39698 0.666504 0.666016 4.39747 0.666016 8.99984ZM6.08268 11.4998C6.08268 11.9601 6.45578 12.3332 6.91602 12.3332C7.37625 12.3332 7.74935 11.9601 7.74935 11.4998V6.49984C7.74935 6.0396 7.37625 5.6665 6.91602 5.6665C6.45578 5.6665 6.08268 6.0396 6.08268 6.49984L6.08268 11.4998ZM11.0827 12.3332C10.6224 12.3332 10.2493 11.9601 10.2493 11.4998V6.49984C10.2493 6.0396 10.6224 5.6665 11.0827 5.6665C11.5429 5.6665 11.916 6.0396 11.916 6.49984V11.4998C11.916 11.9601 11.5429 12.3332 11.0827 12.3332Z"
        fill=""
      />
    </svg>
  )
})

Pause.displayName = 'Pause'
