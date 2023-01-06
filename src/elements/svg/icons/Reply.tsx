import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Reply: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99988 6.82284H8.12485V4.0103C8.12485 3.81623 8.00579 3.64279 7.82485 3.57341C7.64578 3.50216 7.43953 3.55091 7.30922 3.69529L2.62164 8.85162C2.45945 9.03069 2.45945 9.3035 2.62164 9.48257L7.30922 14.6389C7.40015 14.7373 7.52672 14.7917 7.6561 14.7917C7.71328 14.7917 7.77047 14.7814 7.82485 14.7608C8.00579 14.6905 8.12485 14.517 8.12485 14.323V11.5104H9.10924C11.9762 11.5104 14.6715 12.627 16.6994 14.6548C16.8344 14.7898 17.0369 14.8292 17.2103 14.7561C17.3856 14.6839 17.5 14.5123 17.5 14.323C17.5 10.1876 14.1353 6.82284 9.99988 6.82284Z"
        fill=""
      />
    </svg>
  )
}

export default memo(Reply)
