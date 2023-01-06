import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const IconI: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M4.04905 1.6574L3.51526 1.54485C3.05736 1.4483 2.76384 0.999565 2.8589 0.54139C2.92431 0.226076 3.20213 0 3.52419 0H7.56653C8.00061 0 8.32514 0.398719 8.23697 0.823714C8.16806 1.15584 7.90949 1.41593 7.57775 1.4868L6.58128 1.69968L4.1879 13.3394L4.73696 13.4552C5.19487 13.5517 5.48838 14.0004 5.39333 14.4586C5.32791 14.7739 5.05009 15 4.72804 15H0.685696C0.25161 15 -0.0729183 14.6013 0.0152539 14.1763C0.0841589 13.8442 0.342734 13.5841 0.674478 13.5132L1.65427 13.3039L4.04905 1.6574Z"
        fill=""
      />
    </svg>
  )
})

IconI.displayName = 'IconI'
