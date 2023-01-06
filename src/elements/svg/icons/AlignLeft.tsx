import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const AlignLeft: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.25 1.25C0.25 0.835786 0.585786 0.5 1 0.5H13C13.4142 0.5 13.75 0.835786 13.75 1.25C13.75 1.66421 13.4142 2 13 2H1C0.585786 2 0.25 1.66421 0.25 1.25ZM0.25 5C0.25 4.58579 0.585786 4.25 1 4.25H8.5C8.91421 4.25 9.25 4.58579 9.25 5C9.25 5.41421 8.91421 5.75 8.5 5.75H1C0.585786 5.75 0.25 5.41421 0.25 5ZM1 8C0.585786 8 0.25 8.33579 0.25 8.75C0.25 9.16421 0.585786 9.5 1 9.5H4C4.41421 9.5 4.75 9.16421 4.75 8.75C4.75 8.33579 4.41421 8 4 8H1Z"
        fill=""
      />
    </svg>
  )
})

AlignLeft.displayName = 'AlignLeft'
