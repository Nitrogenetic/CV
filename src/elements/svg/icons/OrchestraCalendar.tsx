import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const OrchestraCalendar: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M6.51409 1.25V2.5H11.4855V1.25C11.4855 0.559766 12.0409 0 12.7284 0C13.4158 0 13.9712 0.559766 13.9712 1.25V2.5H15.8355C16.8648 2.5 17.6998 3.33945 17.6998 4.375V6.25H0.299805V4.375C0.299805 3.33945 1.13446 2.5 2.16409 2.5H4.02838V1.25C4.02838 0.559766 4.58378 0 5.27123 0C5.95869 0 6.51409 0.559766 6.51409 1.25ZM0.299805 7.5H17.6998V18.125C17.6998 19.1602 16.8648 20 15.8355 20H2.16409C1.13446 20 0.299805 19.1602 0.299805 18.125V7.5ZM13.043 11.8789C13.4391 11.5469 13.4391 10.9531 13.043 10.5859C12.7128 10.2227 12.1225 10.2227 11.7574 10.5859L8.06766 14.3008L6.20726 12.4609C5.87713 12.0977 5.28677 12.0977 4.92168 12.4609C4.56047 12.8281 4.56047 13.4219 4.92168 13.7539L7.40739 16.2539C7.77248 16.6523 8.36284 16.6523 8.69297 16.2539L13.043 11.8789Z"
        fill=""
      />
    </svg>
  )
})

OrchestraCalendar.displayName = 'OrchestraCalendar'
