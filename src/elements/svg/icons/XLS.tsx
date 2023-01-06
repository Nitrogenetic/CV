import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const XLS: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls(className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M10 0.800781H4.6976C4.3124 0.800781 4 1.11318 4 1.49838V4.40198H10V0.800781Z" fill="#169154" />
      <path d="M4 11.6224V14.5032C4 14.8884 4.3124 15.2008 4.6972 15.2008H10V11.6224H4Z" fill="#18482A" />
      <path d="M4 4.40198H10V8.00278H4V4.40198Z" fill="#0C8045" />
      <path d="M4 8.00278H10V11.6224H4V8.00278Z" fill="#17472A" />
      <path d="M15.3024 0.800781H10V4.40198H16V1.49838C16 1.11318 15.6876 0.800781 15.3024 0.800781Z" fill="#29C27F" />
      <path
        d="M10 11.6224V15.2008L15.3028 15.2008C15.6876 15.2008 16 14.8884 16 14.5036V11.6228L10 11.6224Z"
        fill="#27663F"
      />
      <path d="M10 4.40198H16V8.00278L10 8.00278V4.40198Z" fill="#19AC65" />
      <path d="M10 8.00278L16 8.00278V11.6228L10 11.6224V8.00278Z" fill="#129652" />
      <path
        d="M7.3276 12.0008H0.6724C0.3012 12.0008 0 11.6996 0 11.3284V4.67318C0 4.30198 0.3012 4.00078 0.6724 4.00078H7.3276C7.6988 4.00078 8 4.30198 8 4.67318V11.3284C8 11.6996 7.6988 12.0008 7.3276 12.0008Z"
        fill="#0C7238"
      />
      <path
        d="M2.3228 6.00078H3.2772L4.0516 7.50238L4.87 6.00078H5.7616L4.5332 8.00078L5.7896 10.0008H4.8492L4.0052 8.42878L3.1648 10.0008H2.2104L3.4876 7.99358L2.3228 6.00078Z"
        fill="white"
      />
    </svg>
  )
})

XLS.displayName = 'XLS'
