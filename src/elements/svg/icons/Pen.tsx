import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Pen: React.FC<IconProps> = memo(props => {
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
        d="M13.0076 2.15763C13.6618 1.50344 14.7224 1.50344 15.3766 2.15763L17.842 4.62307C18.4962 5.27726 18.4962 6.33791 17.842 6.9921L7.61745 17.2167C7.38459 17.4495 7.08827 17.6086 6.76552 17.674L3.67378 18.3003C3.1234 18.4118 2.55377 18.2401 2.15669 17.843C1.7596 17.4459 1.5879 16.8763 1.69939 16.3259L2.32569 13.2342C2.39107 12.9114 2.55013 12.6151 2.78299 12.3822L13.0076 2.15763ZM3.70225 14.8762L3.80997 14.3444L5.65526 16.1897L5.12352 16.2974L3.3412 16.6585L3.70225 14.8762ZM7.14985 15.3153L4.68441 12.8498L11.8757 5.65856L14.3411 8.124L7.14985 15.3153ZM15.5256 6.93948L16.6575 5.80758L15.473 4.62307L15.3766 4.52666L14.1921 3.34215L13.0602 4.47405L15.5256 6.93948Z"
        fill=""
      />
    </svg>
  )
})

Pen.displayName = 'Pen'
