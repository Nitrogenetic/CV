import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ZoomIcon: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M0.439999 0H9.74039C10.3454 0.0447059 10.934 0.295294 11.363 0.715294C11.8409 1.17 12.1162 1.81588 12.1149 2.46588C12.1143 4.46765 12.1162 6.47 12.1143 8.47176C12.1277 8.70412 11.9328 8.94118 11.6854 8.94C8.65808 8.94353 5.63075 8.93882 2.60341 8.94235C1.91918 8.96412 1.23434 8.68412 0.761244 8.20471C0.294803 7.75353 0.0358705 7.11765 0.0310307 6.47941C0.0292157 4.49059 0.0304257 2.50176 0.0304257 0.512941C0.0134862 0.270588 0.188931 0.0370588 0.439999 0Z"
          fill=""
        />
        <path
          d="M16.6758 0H16.8385C16.9166 0.108824 16.965 0.233529 16.9994 0.361176L17 0.363529V7.94647C16.9934 8.14529 16.9801 8.54353 16.974 8.74235C16.9377 9.02235 16.6092 8.97706 16.4483 8.84177C15.1899 7.94706 13.9304 7.05471 12.6738 6.15824C12.6744 5.03824 12.6744 3.91882 12.6738 2.79882C13.9352 1.90235 15.1978 1.00706 16.458 0.108824C16.5245 0.0623529 16.5996 0.03 16.6758 0Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="17" height="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

ZoomIcon.displayName = 'ZoomIcon'
