import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ArrowRotate: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.33268 0C4.45525 0 2.92545 0.897759 2.06128 1.76193C1.19279 2.63042 0.332682 4.12774 0.332682 6C0.332682 7.87744 1.23044 9.40724 2.09461 10.2714C2.9631 11.1399 4.46043 12 6.33268 12C6.70087 12 6.99935 11.7015 6.99935 11.3333C6.99935 10.9651 6.70087 10.6667 6.33268 10.6667C4.8716 10.6667 3.69973 9.99091 3.03742 9.3286C2.37079 8.66197 1.66602 7.4559 1.66602 6C1.66602 4.53892 2.34177 3.36705 3.00409 2.70474C3.67072 2.03811 4.87678 1.33333 6.33268 1.33333C7.79376 1.33333 8.96563 2.00909 9.62794 2.6714C10.1724 3.21585 10.7423 4.12011 10.9329 5.22642L10.4158 4.81275C10.1283 4.58275 9.70878 4.62936 9.47877 4.91687C9.24876 5.20438 9.29538 5.62391 9.58289 5.85391L11.2496 7.18725C11.5148 7.39946 11.8972 7.37827 12.1374 7.13807L13.4708 5.80474C13.7311 5.54439 13.7311 5.12228 13.4708 4.86193C13.2104 4.60158 12.7883 4.60158 12.5279 4.86193L12.267 5.12291C12.0449 3.64795 11.296 2.45386 10.5708 1.7286C9.70227 0.860109 8.20494 0 6.33268 0Z"
        fill=""
      />
    </svg>
  )
})

ArrowRotate.displayName = 'ArrowRotate'