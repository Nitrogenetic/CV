import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Text: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75016 0.583008C1.2439 0.583008 0.833496 0.993413 0.833496 1.49967C0.833496 2.00594 1.2439 2.41634 1.75016 2.41634H18.2481C18.7544 2.41634 19.1648 2.00594 19.1648 1.49967C19.1648 0.993413 18.7544 0.583008 18.2481 0.583008H1.75016ZM1.75016 4.24968C1.2439 4.24968 0.833496 4.66008 0.833496 5.16634C0.833496 5.6726 1.2439 6.08301 1.75016 6.08301H18.2481C18.7544 6.08301 19.1648 5.6726 19.1648 5.16634C19.1648 4.66008 18.7544 4.24968 18.2481 4.24968H1.75016ZM0.833496 8.83301C0.833496 8.32675 1.2439 7.91634 1.75016 7.91634H18.2481C18.7544 7.91634 19.1648 8.32675 19.1648 8.83301C19.1648 9.33927 18.7544 9.74968 18.2481 9.74968H1.75016C1.2439 9.74968 0.833496 9.33927 0.833496 8.83301ZM1.75016 11.583C1.2439 11.583 0.833496 11.9934 0.833496 12.4997C0.833496 13.0059 1.2439 13.4163 1.75016 13.4163H12.0614C12.5676 13.4163 12.978 13.0059 12.978 12.4997C12.978 11.9934 12.5676 11.583 12.0614 11.583H1.75016Z"
        fill=""
      />
    </svg>
  )
})

Text.displayName = 'Text'
