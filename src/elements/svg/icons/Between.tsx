import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Between: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L4.41421 12L8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289ZM15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071C14.9024 17.3166 14.9024 16.6834 15.2929 16.2929L19.5858 12L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z"
        fill=""
      />
    </svg>
  )
})

Between.displayName = 'Between'
