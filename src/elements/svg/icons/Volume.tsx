import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Volume: React.FC<IconProps> = memo(props => {
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
        d="M10 1.5C10 0.946809 9.6721 0.438519 9.14685 0.17749C8.62159 -0.0835381 7.98425 -0.0549294 7.48856 0.251927L4.2609 2.25L1.86538 2.25C0.973232 2.25 0.25 2.92158 0.25 3.75V8.25C0.25 9.07843 0.973233 9.75 1.86538 9.75H4.2609L7.48856 11.7481C7.98425 12.0549 8.62159 12.0835 9.14685 11.8225C9.6721 11.5615 10 11.0532 10 10.5L10 1.5ZM4.95348 3.62404L8.38461 1.5L8.38462 10.5L4.95348 8.37596C4.8208 8.29383 4.66491 8.25 4.50545 8.25H1.86538L1.86538 3.75L4.50545 3.75C4.66491 3.75 4.8208 3.70617 4.95348 3.62404ZM12.8516 3.30211C12.6043 2.96987 12.1344 2.90106 11.8022 3.14842C11.4708 3.39515 11.4015 3.86325 11.6466 4.19534L11.6484 4.19788C11.651 4.20151 11.6561 4.20869 11.6633 4.21923C11.6777 4.24035 11.7006 4.27473 11.7291 4.32089C11.7864 4.41366 11.8649 4.55146 11.9438 4.72272C12.1045 5.07178 12.25 5.52396 12.25 6C12.25 6.47604 12.1045 6.92822 11.9438 7.27728C11.8649 7.44854 11.7864 7.58634 11.7291 7.67911C11.7006 7.72527 11.6777 7.75965 11.6633 7.78077C11.6593 7.78668 11.6559 7.79153 11.6532 7.7953C11.6512 7.79824 11.6495 7.80052 11.6484 7.80212L11.6466 7.80466C11.4015 8.13675 11.4708 8.60485 11.8022 8.85158C12.1344 9.09894 12.6043 9.03013 12.8516 8.69789L12.25 8.25C12.8516 8.69789 12.852 8.69733 12.8522 8.69715L12.8528 8.69631L12.8542 8.69434L12.858 8.68928L12.8685 8.67465C12.8769 8.66292 12.888 8.64724 12.9012 8.62781C12.9278 8.58898 12.9636 8.53495 13.0054 8.46726C13.0887 8.33231 13.1976 8.14061 13.3063 7.9047C13.5205 7.43942 13.75 6.7666 13.75 6C13.75 5.2334 13.5205 4.56058 13.3063 4.0953C13.1976 3.85939 13.0887 3.66769 13.0054 3.53274C12.9636 3.46505 12.9278 3.41102 12.9012 3.37219C12.888 3.35276 12.8769 3.33708 12.8685 3.32535L12.858 3.31072L12.8542 3.30566L12.8528 3.30369L12.8516 3.30211ZM12.25 3.75C12.8516 3.30211 12.8515 3.30193 12.8516 3.30211L12.25 3.75Z"
        fill=""
      />
    </svg>
  )
})

Volume.displayName = 'Volume'