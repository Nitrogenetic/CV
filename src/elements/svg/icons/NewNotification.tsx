import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const NewNotification: React.FC<IconProps> = memo(props => {
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
        d="M11.5362 2.68413C11.2831 2.0861 10.6909 1.6665 10.0007 1.6665C9.08018 1.6665 8.33399 2.4127 8.33399 3.33317V3.61768C6.392 4.30407 5.00066 6.15614 5.00066 8.33317L5.00066 9.58317L5.00066 11.3329L3.65277 13.1862C3.28405 13.6932 3.23101 14.3642 3.51547 14.9228C3.79993 15.4814 4.37378 15.8332 5.00066 15.8332H7.50066C7.50066 17.2139 8.61995 18.3332 10.0007 18.3332C11.3814 18.3332 12.5007 17.2139 12.5007 15.8332H15.0007C15.6275 15.8332 16.2014 15.4814 16.4858 14.9228C16.7703 14.3642 16.7173 13.6932 16.3486 13.1862L15.0007 11.3329L15.0007 9.58317L15.0007 9.1665C14.4081 9.1665 13.8444 9.0428 13.334 8.8198V9.58317V11.3329C13.334 11.6851 13.4456 12.0283 13.6528 12.3132L13.7885 12.4998L15.0007 14.1665H12.9398H10.835H10.834H9.16732H7.06149H5.00066L6.21278 12.4998L6.34855 12.3132C6.55573 12.0283 6.66732 11.6851 6.66732 11.3329V9.58317V8.33317C6.66732 6.49222 8.15971 4.99984 10.0007 4.99984C10.2889 4.99984 10.5685 5.03642 10.8353 5.10519C10.8344 5.07018 10.834 5.03506 10.834 4.99984C10.834 4.1429 11.0927 3.34639 11.5362 2.68413ZM9.16732 15.8332C9.16732 16.2934 9.54042 16.6665 10.0007 16.6665C10.4609 16.6665 10.834 16.2934 10.834 15.8332H9.16732Z"
        fill=""
      />
      <circle cx="15" cy="5" r="2.5" fill="#F92D7A" />
    </svg>
  )
})

NewNotification.displayName = 'NewNotification'
