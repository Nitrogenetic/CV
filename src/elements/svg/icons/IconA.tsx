import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const IconA: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.65949 11H0.562726C0.204269 11 -0.0453017 10.6439 0.0769721 10.307L3.58547 0.638396C3.72453 0.25518 4.08859 0 4.49626 0H5.50397C5.91164 0 6.2757 0.25518 6.41476 0.638396L9.92326 10.307C10.0455 10.6439 9.79596 11 9.4375 11H8.34074C7.9758 11 7.65264 10.7643 7.54116 10.4168L6.84188 8.23685H3.15835L2.45907 10.4168C2.34759 10.7643 2.02443 11 1.65949 11ZM5.31649 3.48159L6.36915 6.76316H3.63108L4.68374 3.48159L4.68878 3.46611C4.70823 3.4062 4.83902 2.98717 5.00012 2.0765C5.16121 2.98717 5.29201 3.4062 5.31146 3.46611L5.31649 3.48159Z"
        fill=""
      />
      <path
        d="M0.5 13C0.223858 13 0 13.2239 0 13.5V15.5C0 15.7761 0.223858 16 0.5 16H9.5C9.77614 16 10 15.7761 10 15.5V13.5C10 13.2239 9.77614 13 9.5 13H0.5Z"
        fill=""
      />
    </svg>
  )
})

IconA.displayName = 'IconA'
