import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const OpenedDoor: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33665 0.666632C1.16496 0.665962 0.994837 0.718357 0.851133 0.820313C0.630874 0.976582 0.5 1.2299 0.5 1.49996V14.4166C0.5 14.7708 0.723802 15.0862 1.05804 15.2032L9.39137 18.1198C9.64628 18.2091 9.92861 18.1692 10.1489 18.013C10.3691 17.8567 10.5 17.6034 10.5 17.3333V4.41663C10.5 4.06251 10.2762 3.74707 9.94196 3.63008L6.23686 2.3333H13.8333V14.8333C13.8333 15.2935 14.2064 15.6666 14.6667 15.6666C15.1269 15.6666 15.5 15.2935 15.5 14.8333V1.49997C15.5 1.03973 15.1269 0.666632 14.6667 0.666632H1.33665ZM8 11.0833C8 11.7737 7.44036 12.3333 6.75 12.3333C6.05964 12.3333 5.5 11.7737 5.5 11.0833C5.5 10.3929 6.05964 9.8333 6.75 9.8333C7.44036 9.8333 8 10.3929 8 11.0833Z"
        fill=""
      />
    </svg>
  )
})

OpenedDoor.displayName = 'OpenedDoor'
