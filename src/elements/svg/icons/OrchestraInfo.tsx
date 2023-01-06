import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const OrchestraInfo: React.FC<IconProps> = memo(props => {
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
        d="M10.0003 1.6665C6.5281 1.6665 1.66699 3.74984 1.66699 9.99984C1.66699 16.2498 5.83366 18.3332 10.0003 18.3332C14.167 18.3332 18.3337 16.2498 18.3337 9.99984C18.3337 3.74984 13.4725 1.6665 10.0003 1.6665ZM11.2503 6.24984C11.2503 6.94019 10.6907 7.49984 10.0003 7.49984C9.30997 7.49984 8.75033 6.94019 8.75033 6.24984C8.75033 5.55948 9.30997 4.99984 10.0003 4.99984C10.6907 4.99984 11.2503 5.55948 11.2503 6.24984ZM7.91699 9.1665C7.91699 8.70627 8.29009 8.33317 8.75033 8.33317H10.417C10.8772 8.33317 11.2503 8.70627 11.2503 9.1665V13.3332H12.0837C12.5439 13.3332 12.917 13.7063 12.917 14.1665C12.917 14.6267 12.5439 14.9998 12.0837 14.9998H8.75033C8.29009 14.9998 7.91699 14.6267 7.91699 14.1665C7.91699 13.7063 8.29009 13.3332 8.75033 13.3332H9.58366V9.99984H8.75033C8.29009 9.99984 7.91699 9.62674 7.91699 9.1665Z"
        fill="#0078CE"
      />
    </svg>
  )
})

OrchestraInfo.displayName = 'OrchestraInfo'
