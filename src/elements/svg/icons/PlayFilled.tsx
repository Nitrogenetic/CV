import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const PlayFilled: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00006 15C3.85793 15 0.500061 11.6421 0.500061 7.5C0.500061 3.35787 3.85793 0 8.00006 0C12.1422 0 15.5001 3.35787 15.5001 7.5C15.5001 11.6421 12.1422 15 8.00006 15ZM7.60292 5.05382C7.35232 4.88675 7.03011 4.87117 6.76456 5.01329C6.49902 5.15541 6.33325 5.43214 6.33325 5.73332V8.99999C6.33325 9.30117 6.49902 9.57791 6.76456 9.72002C7.03011 9.86214 7.35232 9.84656 7.60292 9.6795L10.0529 8.04616C10.2801 7.8947 10.4166 7.63971 10.4166 7.36666C10.4166 7.0936 10.2801 6.83861 10.0529 6.68715L7.60292 5.05382Z"
        fill=""
      />
    </svg>
  )
})

PlayFilled.displayName = 'PlayFilled'
