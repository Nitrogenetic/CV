import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const Flash: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="8"
      height="10"
      viewBox="0 0 8 10"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.99345 0.063528C6.21331 0.178683 6.31728 0.42232 6.24281 0.647862L5.24654 3.66542L7.40552 3.43188C7.62887 3.40772 7.8444 3.51746 7.94437 3.70626C8.04433 3.89506 8.00728 4.12235 7.85171 4.27453L2.15649 9.84594C1.98154 10.0171 1.70244 10.0495 1.48819 9.92365C1.27394 9.79775 1.18343 9.54812 1.27147 9.3259L2.45085 6.34909L0.599946 6.56751C0.380262 6.59344 0.166339 6.48941 0.0624095 6.30612C-0.0415203 6.12283 -0.0138392 5.8984 0.131966 5.74218L5.33195 0.170769C5.49779 -0.00691308 5.7736 -0.0516272 5.99345 0.063528Z"
        fill=""
      />
    </svg>
  )
})

Flash.displayName = 'Flash'
