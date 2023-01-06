import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Voice: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.1968 7.81657H4.9999C3.64667 7.81657 2.54979 6.73341 2.54979 5.39763V2.79448C2.54979 1.45816 3.64667 0.375 4.9999 0.375H5.1968C6.31986 0.375 7.26619 1.12045 7.55582 2.1379C7.59563 2.2774 7.49036 2.41583 7.34419 2.41583H6.70657C6.51403 2.41583 6.35749 2.56988 6.35749 2.76001V2.76055C6.35749 2.95122 6.51403 3.10526 6.70657 3.10526H7.29455C7.48927 3.10526 7.64745 3.26092 7.64745 3.45321C7.64745 3.6455 7.48927 3.80116 7.29455 3.80116H6.70657C6.51403 3.80116 6.35749 3.95574 6.35749 4.14641C6.35749 4.33655 6.51403 4.49113 6.70657 4.49113H7.29455C7.48927 4.49113 7.64745 4.64679 7.64745 4.83962C7.64745 5.03137 7.48927 5.18703 7.29455 5.18703H6.70657C6.51403 5.18703 6.35749 5.34161 6.35749 5.53228C6.35749 5.72242 6.51403 5.87646 6.70657 5.87646H7.3131C7.46255 5.87646 7.56945 6.02081 7.52254 6.16085C7.1991 7.12283 6.28058 7.81657 5.1968 7.81657ZM8.7935 5.32025C8.7935 5.02239 9.03786 4.78163 9.33894 4.78163C9.64002 4.78163 9.88438 5.02239 9.88438 5.32025C9.88438 7.7435 8.02662 9.74447 5.64415 10.0132V11.0975C5.64415 11.3948 5.39979 11.6361 5.09871 11.6361C4.79708 11.6361 4.55327 11.3948 4.55327 11.0975V10.0132C2.17026 9.74447 0.3125 7.7435 0.3125 5.32025C0.3125 5.02239 0.556856 4.78163 0.857937 4.78163C1.15902 4.78163 1.40337 5.02239 1.40337 5.32025C1.40337 7.33199 3.06096 8.96886 5.09871 8.96886C7.13592 8.96886 8.7935 7.33199 8.7935 5.32025Z"
        fill="url(#paint0_linear_6217_2493)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6217_2493"
          x1="0.67194"
          y1="0.375"
          x2="8.22024"
          y2="11.8771"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCCCC" />
          <stop offset="1" stopColor="#F92D7A" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Voice.displayName = 'Voice'