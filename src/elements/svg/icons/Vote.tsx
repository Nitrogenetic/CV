import React, { FC, memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Vote: FC<IconProps> = memo(props => {
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
        d="M4.99984 1.66602C3.15889 1.66602 1.6665 3.1584 1.6665 4.99935V14.9994C1.6665 16.8403 3.15889 18.3327 4.99984 18.3327H14.9998C16.8408 18.3327 18.3332 16.8403 18.3332 14.9994V4.99935C18.3332 3.1584 16.8408 1.66602 14.9998 1.66602H4.99984ZM14.6567 8.90869C15.0289 9.17939 15.1112 9.70057 14.8405 10.0728L11.5071 14.6561C11.3543 14.8663 11.1121 14.9931 10.8523 14.9991C10.5925 15.0051 10.3448 14.8895 10.1825 14.6866L8.51581 12.6032C8.2283 12.2438 8.28657 11.7194 8.64596 11.4319C9.00534 11.1444 9.52975 11.2027 9.81726 11.5621L10.8016 12.7925L13.4926 9.0925C13.7633 8.72029 14.2845 8.638 14.6567 8.90869Z"
        fill=""
      />
    </svg>
  )
})

Vote.displayName = 'Vote'
