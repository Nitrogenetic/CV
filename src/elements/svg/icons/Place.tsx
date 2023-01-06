import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Place: React.FC<IconProps> = memo(props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5847 9.87947L10.0003 15.7918L6.41594 9.87947C4.6774 7.0118 6.69735 3.30917 10.0003 3.30917C13.3033 3.30917 15.3232 7.0118 13.5847 9.87947ZM5.0483 10.744C2.64642 6.78213 5.43709 1.66675 10.0003 1.66675C14.5636 1.66675 17.3542 6.78213 14.9524 10.744L10.5359 18.0288C10.2896 18.435 9.71101 18.435 9.46475 18.0288L5.0483 10.744ZM10.0005 5.77281C9.11215 5.77281 8.39201 6.50814 8.39201 7.41523C8.39201 8.32231 9.11215 9.05765 10.0005 9.05765C10.8888 9.05765 11.609 8.32231 11.609 7.41523C11.609 6.50814 10.8888 5.77281 10.0005 5.77281Z"
        fill=""
      />
    </svg>
  )
})

Place.displayName = 'Place'
