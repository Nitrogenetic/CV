import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Substract: React.FC<IconProps> = memo(props => {
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
        d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM14.6757 6.26285C15.0829 6.63604 15.1104 7.26861 14.7372 7.67573L9.23718 13.6757C9.04221 13.8884 8.76487 14.0065 8.47642 13.9997C8.18797 13.9929 7.91652 13.8618 7.7318 13.6402L5.2318 10.6402C4.87824 10.2159 4.93556 9.58535 5.35984 9.23178C5.78412 8.87822 6.41468 8.93554 6.76825 9.35982L8.53589 11.481L13.2629 6.32428C13.6361 5.91716 14.2686 5.88966 14.6757 6.26285Z"
        fill=""
      />
    </svg>
  )
})

Substract.displayName = 'Substract'
