import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const AlignRight: React.FC<IconProps> = memo(props => {
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
        d="M13.75 1.25C13.75 0.835786 13.4142 0.5 13 0.5H1C0.585785 0.5 0.25 0.835786 0.25 1.25C0.25 1.66421 0.585785 2 1 2H13C13.4142 2 13.75 1.66421 13.75 1.25ZM13.75 5C13.75 4.58579 13.4142 4.25 13 4.25H5.5C5.08579 4.25 4.75 4.58579 4.75 5C4.75 5.41421 5.08579 5.75 5.5 5.75H13C13.4142 5.75 13.75 5.41421 13.75 5ZM13 8C13.4142 8 13.75 8.33579 13.75 8.75C13.75 9.16421 13.4142 9.5 13 9.5H10C9.58579 9.5 9.25 9.16421 9.25 8.75C9.25 8.33579 9.58579 8 10 8H13Z"
        fill=""
      />
    </svg>
  )
})

AlignRight.displayName = 'AlignRight'
