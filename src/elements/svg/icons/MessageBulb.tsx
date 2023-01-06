import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const MessageBulb: React.FC<IconProps> = memo(props => {
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
        d="M1.66797 8.9195V8.64039C1.66797 5.24915 4.40401 2.5 7.77908 2.5H12.2235C15.5986 2.5 18.3346 5.24915 18.3346 8.64039C18.3346 12.0155 15.6245 14.7546 12.2716 14.7806L9.50975 17.0932C8.38127 18.0381 6.66797 17.2318 6.66797 15.7558V14.7214C3.84106 14.3151 1.66797 11.8723 1.66797 8.9195ZM8.44277 15.8067L11.4086 13.3233C11.5762 13.183 11.7874 13.1061 12.0056 13.1061H12.2235C14.6781 13.1061 16.668 11.1067 16.668 8.64039C16.668 6.17403 14.6781 4.17465 12.2235 4.17465H7.77908C5.32448 4.17465 3.33464 6.17403 3.33464 8.64039V8.9195C3.33464 11.2317 5.20012 13.1061 7.5013 13.1061C7.89113 13.1061 8.21844 13.3751 8.30946 13.7384C8.3259 13.804 8.33464 13.8727 8.33464 13.9435V15.7558C8.33464 15.8119 8.39983 15.8426 8.44277 15.8067Z"
        fill=""
      />
    </svg>
  )
})

MessageBulb.displayName = 'MessageBulb'
