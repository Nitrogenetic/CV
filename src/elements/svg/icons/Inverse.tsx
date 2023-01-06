import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Inverse: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M14 10.3333V5.33331C14 4.87308 14.3731 4.49998 14.8333 4.49998C15.2935 4.49998 15.6666 4.87308 15.6666 5.33331V10.3333C15.6666 12.6345 13.8011 14.5 11.5 14.5H4.83329C2.53211 14.5 0.666626 12.6345 0.666626 10.3333V4.49998C0.666626 2.19879 2.53211 0.333313 4.83329 0.333313H6.51298C6.97322 0.333313 7.34631 0.706409 7.34631 1.16665C7.34631 1.62688 6.97322 1.99998 6.51298 1.99998H4.83329C3.45258 1.99998 2.33329 3.11927 2.33329 4.49998L2.33329 10.3333C2.33329 11.714 3.45258 12.8333 4.83329 12.8333H11.5C12.8807 12.8333 14 11.714 14 10.3333Z"
        fill="#1F1F1F"
      />
      <path
        d="M5.07737 7.24406C4.75193 7.56949 4.75193 8.09713 5.07737 8.42257L7.57737 10.9226C7.90281 11.248 8.43045 11.248 8.75588 10.9226L11.2559 8.42257C11.5813 8.09713 11.5813 7.56949 11.2559 7.24406C10.9304 6.91862 10.4028 6.91862 10.0774 7.24406L9.01955 8.30188C9.06273 7.56497 9.18866 6.62931 9.50367 5.70677C9.83469 4.73739 10.3612 3.81999 11.1836 3.14567C11.9941 2.48104 13.1553 1.99998 14.8608 1.99998C15.3211 1.99998 15.6942 1.62688 15.6942 1.16665C15.6942 0.706409 15.3211 0.333313 14.8608 0.333313C12.8164 0.333313 11.2694 0.919959 10.1268 1.85689C8.99598 2.78414 8.32459 4.00216 7.92643 5.16819C7.52851 6.33349 7.39024 7.48428 7.34882 8.33307L7.34864 8.33682L6.25588 7.24406C5.93044 6.91862 5.40281 6.91862 5.07737 7.24406Z"
        fill="#1F1F1F"
      />
    </svg>
  )
})

Inverse.displayName = 'Inverse'