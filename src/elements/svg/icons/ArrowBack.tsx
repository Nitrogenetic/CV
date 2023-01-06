import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ArrowBack: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M5.91091 11.5892C6.23634 11.9147 6.76398 11.9147 7.08942 11.5892C7.41485 11.2638 7.41485 10.7361 7.08942 10.4107L3.51201 6.83329H16.5002C16.9604 6.83329 17.3335 6.4602 17.3335 5.99996C17.3335 5.53972 16.9604 5.16663 16.5002 5.16663H3.51201L7.08942 1.58922C7.41485 1.26378 7.41485 0.736141 7.08942 0.410703C6.76398 0.0852668 6.23634 0.0852669 5.91091 0.410703L0.910906 5.4107C0.585469 5.73614 0.585469 6.26378 0.910906 6.58922L5.91091 11.5892Z"
        fill="#1F1F1F"
      />
    </svg>
  )
})

ArrowBack.displayName = 'ArrowBack'
