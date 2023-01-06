import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const External: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M10 5.5C9.86739 5.5 9.74021 5.55268 9.64645 5.64645C9.55268 5.74021 9.5 5.86739 9.5 6V9C9.5 9.13261 9.44732 9.25979 9.35355 9.35355C9.25979 9.44732 9.13261 9.5 9 9.5H3C2.86739 9.5 2.74021 9.44732 2.64645 9.35355C2.55268 9.25979 2.5 9.13261 2.5 9V3C2.5 2.86739 2.55268 2.74021 2.64645 2.64645C2.74021 2.55268 2.86739 2.5 3 2.5H6C6.13261 2.5 6.25979 2.44732 6.35355 2.35355C6.44732 2.25979 6.5 2.13261 6.5 2C6.5 1.86739 6.44732 1.74021 6.35355 1.64645C6.25979 1.55268 6.13261 1.5 6 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V9C1.5 9.39782 1.65804 9.77936 1.93934 10.0607C2.22064 10.342 2.60218 10.5 3 10.5H9C9.39782 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77936 10.5 9.39782 10.5 9V6C10.5 5.86739 10.4473 5.74021 10.3536 5.64645C10.2598 5.55268 10.1326 5.5 10 5.5Z"
        fill=""
      />
      <path
        d="M8.00095 2.5H8.79095L5.64595 5.64C5.59908 5.68648 5.56188 5.74178 5.5365 5.80271C5.51112 5.86364 5.49805 5.92899 5.49805 5.995C5.49805 6.06101 5.51112 6.12636 5.5365 6.18729C5.56188 6.24822 5.59908 6.30352 5.64595 6.35C5.69243 6.39686 5.74773 6.43406 5.80866 6.45945C5.86959 6.48483 5.93494 6.4979 6.00095 6.4979C6.06695 6.4979 6.1323 6.48483 6.19323 6.45945C6.25416 6.43406 6.30946 6.39686 6.35595 6.35L9.50095 3.21V4C9.50095 4.13261 9.55362 4.25979 9.64739 4.35355C9.74116 4.44732 9.86834 4.5 10.0009 4.5C10.1336 4.5 10.2607 4.44732 10.3545 4.35355C10.4483 4.25979 10.5009 4.13261 10.5009 4V2C10.5009 1.86739 10.4483 1.74021 10.3545 1.64645C10.2607 1.55268 10.1336 1.5 10.0009 1.5H8.00095C7.86834 1.5 7.74116 1.55268 7.64739 1.64645C7.55362 1.74021 7.50095 1.86739 7.50095 2C7.50095 2.13261 7.55362 2.25979 7.64739 2.35355C7.74116 2.44732 7.86834 2.5 8.00095 2.5Z"
        fill=""
      />
    </svg>
  )
})

External.displayName = 'External'
