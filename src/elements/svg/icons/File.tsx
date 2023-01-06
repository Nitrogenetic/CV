import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const File: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.59961 4.59375C1.59961 2.93689 2.94276 1.59375 4.59961 1.59375H20.5825C21.37 1.59375 22.126 1.90344 22.6872 2.45597L29.5043 9.16772C30.0771 9.73162 30.3996 10.5018 30.3996 11.3055V35.4063C30.3996 37.0631 29.0565 38.4062 27.3996 38.4062H4.59961C2.94276 38.4062 1.59961 37.0631 1.59961 35.4062V4.59375Z"
        fill=""
      />
      <path
        d="M4.59961 1.09375C2.66661 1.09375 1.09961 2.66075 1.09961 4.59375V35.4062C1.09961 37.3392 2.66661 38.9062 4.59961 38.9062H27.3996C29.3326 38.9062 30.8996 37.3392 30.8996 35.4063V11.3055C30.8996 10.3678 30.5233 9.4693 29.8551 8.81143L23.038 2.09967C22.3832 1.45505 21.5013 1.09375 20.5825 1.09375H4.59961Z"
        stroke=""
        strokeOpacity="0.08"
      />
    </svg>
  )
})

File.displayName = 'File'
