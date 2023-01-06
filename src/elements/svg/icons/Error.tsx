import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Error: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cls('fill-current', className)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.3335 7.99967C1.3335 2.99967 5.22238 1.33301 8.00016 1.33301C10.7779 1.33301 14.6668 2.99967 14.6668 7.99967C14.6668 12.9997 11.3335 14.6663 8.00016 14.6663C4.66683 14.6663 1.3335 12.9997 1.3335 7.99967ZM7.38285 4.18793H8.61755C9.00444 4.18793 9.31008 4.51618 9.28252 4.90209L9.04442 8.23542C9.0195 8.58429 8.72921 8.85459 8.37945 8.85459H7.62094C7.27118 8.85459 6.98089 8.58429 6.95597 8.23542L6.71787 4.90209C6.69031 4.51618 6.99595 4.18793 7.38285 4.18793ZM8.0002 11.8546C8.55248 11.8546 9.0002 11.4069 9.0002 10.8546C9.0002 10.3023 8.55248 9.85459 8.0002 9.85459C7.44791 9.85459 7.0002 10.3023 7.0002 10.8546C7.0002 11.4069 7.44791 11.8546 8.0002 11.8546Z"
        fill=""
        {...otherProps}
      />
    </svg>
  )
})

Error.displayName = 'Error'
