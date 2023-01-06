import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const BoldPerson: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M9.75 9.23684C9.75 14.3294 14.1245 18.4737 19.5 18.4737C24.8755 18.4737 29.25 14.3294 29.25 9.23684C29.25 4.14426 24.8755 0 19.5 0C14.1245 0 9.75 4.14426 9.75 9.23684ZM36.8333 39H36.9474C38.081 39 39 38.081 39 36.9474C39 29.0263 32.1945 22.5789 23.8333 22.5789H15.1667C6.80333 22.5789 0 29.0263 0 36.9474C0 38.081 0.918994 39 2.05263 39H36.8333Z"
        fill=""
      />
    </svg>
  )
})

BoldPerson.displayName = 'BoldPerson'
