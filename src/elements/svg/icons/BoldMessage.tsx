import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const BoldMessage: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="41"
      height="34"
      viewBox="0 0 41 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.1463V15.8348C0 23.1183 5.34579 29.144 12.3 30.1462V32.6976C12.3 36.3384 16.5147 38.3272 19.2908 35.9965L26.085 30.2921C34.3332 30.2281 41 23.4716 41 15.1463C41 6.78123 34.2693 0 25.9667 0H15.0333C6.73065 0 0 6.78122 0 15.1463ZM11.275 12.3333C9.57672 12.3333 8.2 13.7138 8.2 15.4167C8.2 17.1195 9.57672 18.5 11.275 18.5C12.9733 18.5 14.35 17.1195 14.35 15.4167C14.35 13.7138 12.9733 12.3333 11.275 12.3333ZM17.425 15.4167C17.425 13.7138 18.8017 12.3333 20.5 12.3333C22.1983 12.3333 23.575 13.7138 23.575 15.4167C23.575 17.1195 22.1983 18.5 20.5 18.5C18.8017 18.5 17.425 17.1195 17.425 15.4167ZM29.725 12.3333C28.0267 12.3333 26.65 13.7138 26.65 15.4167C26.65 17.1195 28.0267 18.5 29.725 18.5C31.4233 18.5 32.8 17.1195 32.8 15.4167C32.8 13.7138 31.4233 12.3333 29.725 12.3333Z"
        fill=""
      />
    </svg>
  )
})

BoldMessage.displayName = 'BoldMessage'
