import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Find: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0797 15.8979C12.9405 16.6831 11.5596 17.1429 10.0714 17.1429C6.16599 17.1429 3 13.9769 3 10.0714C3 6.16599 6.16599 3 10.0714 3C13.9769 3 17.1429 6.16599 17.1429 10.0714C17.1429 11.5596 16.6831 12.9405 15.8979 14.0797L20.6234 18.8051C21.1255 19.3073 21.1255 20.1213 20.6234 20.6234C20.1213 21.1255 19.3073 21.1255 18.8051 20.6234L14.0797 15.8979ZM14.5714 10.0714C14.5714 12.5567 12.5567 14.5714 10.0714 14.5714C7.58615 14.5714 5.57143 12.5567 5.57143 10.0714C5.57143 7.58615 7.58615 5.57143 10.0714 5.57143C12.5567 5.57143 14.5714 7.58615 14.5714 10.0714Z"
        fill=""
      />
    </svg>
  )
})

Find.displayName = 'Find'
